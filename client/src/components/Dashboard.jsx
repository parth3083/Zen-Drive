// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Dash_Banner from "./Dash_Banner";
// import { toast } from "react-toastify";
// import { Link, useNavigate } from "react-router-dom";
// import image1 from "../assets/file.png";

// function Dashboard() {
//   const [files, setFiles] = useState([]);
//   const navigate = useNavigate();

//   const fetchFiles = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/files", {
//         withCredentials: true,
//       });
//       const fileData = response.data.document_urls.map((url, index) => ({
//         url,
//         name: response.data.document_names[index],
//       }));
//       setFiles(fileData);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchFiles(); // Initial fetch
//     const interval = setInterval(fetchFiles, 2000); // Fetch every 2 seconds
//     return () => clearInterval(interval); // Clean up on unmount
//   }, []);

//   const handleLogOut = async () => {
//     try {
//       const response = await axios.post(
//         "http://localhost:3000/logout",
//         {},
//         { withCredentials: true }
//       );
//       if (response.status === 201) {
//         toast.success("Logout successful");
//         navigate("/login");
//       }
//     } catch (err) {
//       if (err.response?.status === 421) {
//         toast.warn("Error in logging out");
//       } else {
//         console.log(err);
//       }
//     }
//   };

//   const handleFileInputClick = () => {
//     document.getElementById("fileInputA").click();
//   };

//   const handleFileChange = async (event) => {
//     const files = Array.from(event.target.files);
//     const multipleFormData = new FormData();
//     files.forEach((file) => {
//       multipleFormData.append("multipleFiles", file);
//     });

//     try {
//       const response = await axios.post("http://localhost:3000/upload", multipleFormData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       });
//       if (response.status === 203) {
//         toast.success("File uploaded successfully");
//         fetchFiles(); // Refresh file list after upload
//       }
//       console.log("File upload response:", response.data);
//     } catch (err) {
//       if (err.response?.status === 422) {
//         toast.warn("No files uploaded!");
//       } else if (err.response?.status === 423) {
//         toast.warn("Error uploading multiple files!");
//       } else if (err.response?.status === 424) {
//         toast.error("Error in reading the files");
//       } else if (err.response?.status === 425) {
//         toast.error("Error in storing files to the database");
//       } else {
//         console.log(err);
//       }
//     }
//   };

//   return (
//     <div className="w-full h-screen bg-[#ECF0F1] flex items-center">
//       <div className="banner_side hidden sm:block w-[20%] h-full">
//         <Dash_Banner />
//       </div>
//       <div className="right_side w-full sm:w-[80%] h-full py-3">
//         <div className="top w-full flex items-center justify-end px-3 sm:px-5 h-[5%] sm:h-[7%]">
//           <button
//             onClick={handleLogOut}
//             className="details_box px-3 flex items-center justify-center gap-5 overflow-hidden rounded-md py-1 w-[20%] sm:w-[10%] h-8 sm:h-12 border-[3px] font-pop text-lg font-semibold text-[#3498DB] border-[#3498DB]"
//           >
//             Log out
//           </button>
//         </div>
//         <div className="welcome w-full flex items-center h-[8%] px-10">
//           <h1 className="font-pop font-extrabold text-[5.25vw] sm:text-5xl">
//             Welcome to Zen Drive, Parth
//           </h1>
//         </div>
//         <div className="all_files w-full h-[85%] py-5 overflow-y-auto flex flex-wrap gap-3 sm:gap-10 px-8 sm:px-10">
//           {files.map((file, index) => (
//             <Link to={file.document_urls} key={index} className="details w-fit h-fit">
//               <div className="image_container w-[25vw] sm:w-[12vw] h-[25vw] sm:h-[12vw] rounded-sm">
//                 <img src={image1} alt={file.name} />
//               </div>
//               <h1 className="font-pop font-medium text-lg mt-2 text-center">
//                 {file.name}
//               </h1>
//             </Link>
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={handleFileInputClick}
//         className="upload_button px-5 text-white fixed bottom-5 right-6 py-1 rounded-md font-pop font-semibold text-xl bg-[#3498DB]"
//       >
//         Upload
//       </button>
//       <input
//         type="file"
//         id="fileInputA"
//         onChange={handleFileChange}
//         multiple
//         hidden
//       />
//     </div>
//   );
// }

// export default Dashboard;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Dash_Banner from "./Dash_Banner";
import { toast } from "react-toastify";
import image1 from "../assets/file.png";

function Dashboard() {
  const [files, setFiles] = useState([]);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchFiles = async () => {
    try {
      const response = await axios.get("http://localhost:3000/files", {
        withCredentials: true,
      });
      setName(response.data.name);
      console.log( setName(response.data.name))
     console.log(response)
      const fileData = response.data.document_urls.map((url, index) => ({
        url ,
        name: response.data.document_names[index],
      }));
      setFiles(fileData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFiles();
    const interval = setInterval(fetchFiles, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleLogOut = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/logout",
        {},
        { withCredentials: true }
      );
      if (response.status === 201) {
        toast.success("Logout successful");
        navigate("/login");
      }
    } catch (err) {
      if (err.response?.status === 421) {
        toast.warn("Error in logging out");
      } else {
        console.log(err);
      }
    }
  };

  const handleFileInputClick = () => {
    document.getElementById("fileInputA").click();
  };

  const handleFileChange = async (event) => {
    const files = Array.from(event.target.files);
    const multipleFormData = new FormData();
    files.forEach((file) => {
      multipleFormData.append("multipleFiles", file);
    });

    try {
      const response = await axios.post("http://localhost:3000/upload", multipleFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (response.status === 203) {
        toast.success("File uploaded successfully");
        fetchFiles();
      }
      console.log("File upload response:", response.data);
    } catch (err) {
      if (err.response?.status === 422) {
        toast.warn("No files uploaded!");
      } else if (err.response?.status === 423) {
        toast.warn("Error uploading multiple files!");
      } else if (err.response?.status === 424) {
        toast.error("Error in reading the files");
      } else if (err.response?.status === 425) {
        toast.error("Error in storing files to the database");
      } else {
        console.log(err);
      }
    }
  };

  return (
    <div className="w-full h-screen bg-[#ECF0F1] flex items-center">
      <div className="banner_side hidden sm:block w-[20%] h-full">
        <Dash_Banner />
      </div>
      <div className="right_side w-full sm:w-[80%] h-full py-3">
        <div className="top w-full flex items-center justify-end px-3 sm:px-5 h-[5%] sm:h-[7%]">
          <button
            onClick={handleLogOut}
            className="details_box px-3 flex items-center justify-center gap-5 overflow-hidden rounded-md py-1 w-[20%] sm:w-[10%] h-8 sm:h-12 border-[3px] font-pop text-lg font-semibold text-[#3498DB] border-[#3498DB]"
          >
            Log out
          </button>
        </div>
        <div className="welcome w-full flex items-center h-[8%] px-10">
          <h1 className="font-pop font-extrabold text-[5.25vw] sm:text-5xl">
            Welcome to Zen Drive, {name}
          </h1>
        </div>
        <div className="all_files w-full h-[85%] py-5 overflow-y-auto flex flex-wrap gap-3  sm:gap-y-2 sm:gap-10    px-8 sm:px-10">
          {files.map((file, index) => (
            <Link to={file.url} key={index} className="details w-fit h-fit">
              <div className="image_container w-[25vw] sm:w-[10vw] h-[25vw] sm:h-[10vw] rounded-sm">
                <img src={image1} alt={file.name} />
              </div>
              <h1 className="font-pop font-medium text-lg sm:text-sm mt-2 text-center">
                {file.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
      <button
        onClick={handleFileInputClick}
        className="upload_button px-5 text-white fixed bottom-5 right-6 py-1 rounded-md font-pop font-semibold text-xl bg-[#3498DB]"
      >
        Upload
      </button>
      <input
        type="file"
        id="fileInputA"
        onChange={handleFileChange}
        multiple
        hidden
      />
    </div>
  );
}

export default Dashboard;
