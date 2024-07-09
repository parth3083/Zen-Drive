const express = require("express");
const cors = require("cors");
const signupHandler = require("./utils/signup");
const fs = require("fs");
const path = require("path");
const { bucket } = require("./utils/fireBaseConfig");
const app = express();
require("dotenv").config();
require("./utils/dbConnection");
const { multipleUpload } = require("./utils/multipleUpload");
const cookieParser = require("cookie-parser");
const logoutHandler = require("./utils/logout");
const bcrypt = require("bcryptjs");
const UserModel = require("./models/user");
const jwt = require("jsonwebtoken");

let lastUploadedEmail = null;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.send("Working 😎");
});
app.post("/signup", signupHandler);

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  lastUploadedEmail = email;
  const user = await UserModel.findOne({ email: email });
  if (user) {
    const comparedPassword = await bcrypt.compare(password, user.password);
    if (comparedPassword) {
      let token = jwt.sign({ email: email }, process.env.SECRET, {
        expiresIn: "1d",
      });
      res.cookie("token", token, { httpOnly: true });
      res
        .status(203)
        .json({ message: "User logged in successfully", token: token });
    } else {
      res.status(422).json({ message: "Invalid username or password" });
    }
  } else {
    res.status(423).json({ message: "Invalid username or password" });
  }
});

app.post("/logout", logoutHandler);

app.post("/upload", multipleUpload, async (req, res) => {
  try {
    if (!req.file && !req.files.length) {
      return res.status(422).send({ message: "No files uploaded!" });
    }
    console.log(lastUploadedEmail);
    if (lastUploadedEmail) {
      await uploadFileToFireBase(lastUploadedEmail);
      res
        .status(203)
        .send({ message: "Multiple files uploaded successfully!" });
    } else {
      res.status(401).send({ message: "User not authenticated" });
    }
  } catch (err) {
    console.error(err);
    res.status(423).send({ message: "Error uploading multiple files!" });
  }
});

const uploadFileToFireBase = async (userEmail) => {
  const staticFolderPath = path.join(__dirname, "./uploads");
  fs.readdir(staticFolderPath, async (err, files) => {
    if (err) {
      console.error("Error reading static folder:", err);
      return;
    }
    try {
      for (const file of files) {
        const filePath = path.join(staticFolderPath, file);
        await uploadSingleFileToFireBase(filePath, userEmail, file);
        // Delete file after uploading to Firebase
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
            return;
          }
          console.log("File deleted successfully:", filePath);
        });
      }
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  });
};

const uploadSingleFileToFireBase = async (filePath, userEmail, fileName) => {
  try {
    const firebaseFile = bucket.file(fileName);
    const blobStream = firebaseFile.createWriteStream({
      resumable: false,
      contentType: "auto",
    });

    await new Promise((resolve, reject) => {
      blobStream.on("finish", async () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;

        if (userEmail) {
          const user = await UserModel.findOne({ email: userEmail });

          // Make a copy of the existing data
          const updatedUrls = user.document_urls
            ? [...user.document_urls, publicUrl]
            : [publicUrl];
          const updatedNames = user.document_names
            ? [...user.document_names, fileName]
            : [fileName];

          // Update the user document with the new data
          user.document_urls = updatedUrls;
          user.document_names = updatedNames;

          await user.save();
        }
        resolve(publicUrl);
      });
      blobStream.on("error", (err) => {
        reject("Error uploading file to Firebase:", err);
      });
      fs.createReadStream(filePath).pipe(blobStream);
    });
  } catch (error) {
    console.error("Error in uploadSingleFileToFireBase:", error);
  }
};

app.get("/files", async (req, res) => {
  try {
    const userEmail = lastUploadedEmail;
    const user = await UserModel.findOne({ email: userEmail });
    res.json({
      document_urls: user.document_urls,
      document_names: user.document_names,
      name: user.name,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error retrieving files" });
  }
});

app.listen(3000 || "https://zen-drive-2.onrender.com", () => {
  // console.log("http://localhost:3000");
});
