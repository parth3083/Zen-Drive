import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("https://zen-drive-2.onrender.com/signup", data);

      if (response.status === 203) {
        setData({
          name: "",
          email: "",
          password: "",
        });
        toast.success("User created successfully");
        navigate("/login");
      }
    } catch (err) {
      if (err.response?.status === 422) {
        toast.warn("User already exists");
      } else {
        toast.error(err.response?.data?.error || "An error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <div className="w-full h-screen flex items-center bg-[#ECF0F1] ">
      <div className="banner_div w-0 hidden sm:block sm:w-[30%] h-full">
        <Banner />
      </div>
      <div className="right_side w-full sm:w-[70%] h-full ">
        <div className="upper w-full h-[10%] flex items-center justify-end px-2 sm:px-5 ">
          <h1 className=" font-pop text-md sm:text-lg">
            {" "}
            Already have an account !{" "}
            <span>
              <Link to={"/login"}>
                <button className="sm:px-3 px-2 py-[2px] font-semibold rounded-md text-[#3498DB] border-[3px] border-[#3498DB]">
                  Login
                </button>
              </Link>
            </span>
          </h1>
        </div>
        <div className="w-full flex flex-col items-center px-10 justify-center h-[90%] ">
          <h1 className=" font-pop font-extrabold text-3xl sm:text-5xl">
            SignUp into Drive
          </h1>
          <h3 className=" font-pop text-md mt-1 opacity-70">
            Enter your details below
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[95%] sm:w-[40%] gap-5 mt-5 items-center"
          >
            <input
              value={data.name}
              onChange={(e) =>
                setData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full h-12 rounded-md border-2 border-black outline-none text-lg font-pop px-3"
              required
              placeholder="Name"
              type="text"
            />
            <input
              value={data.email}
              onChange={(e) =>
                setData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full h-12 rounded-md border-2 border-black outline-none text-lg font-pop px-3"
              required
              placeholder="Email"
              type="email"
            />
            <input
              value={data.password}
              onChange={(e) =>
                setData((prev) => ({ ...prev, password: e.target.value }))
              }
              className="w-full h-12 rounded-md border-2 border-black outline-none text-lg font-pop px-3"
              required
              placeholder="Password"
              type="password"
            />

            <button className="w-full h-12 bg-[#3498DB] rounded-md text-lg font-pop font-semibold text-white cursor-pointer">
              {loading ? "Processing..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;