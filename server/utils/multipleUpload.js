const multer = require("multer");
const path = require("path");

const uploadsFolder = path.join(__dirname, "../uploads/");

const multipleStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsFolder);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const multipleUpload = multer({ storage: multipleStorage }).array(
  "multipleFiles"
);

module.exports = {
  multipleUpload,
};
