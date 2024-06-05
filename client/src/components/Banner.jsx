import React from "react";

function Banner() {
  return (
    <div className="w-full  flex items-center justify-center h-screen bg-[#3498DB]">
      <div className="w-[90%] flex flex-col items-center justify-center  h-[80%]  ">
        <div className="upper_part flex items-center justify-center  flex-col gap-1 w-full h-[30%] ">
          <h1 className=" font-pop font-extrabold text-5xl text-white">
            Zen Drive
          </h1>
          <h2 className=" font-pop font-medium text-md capitalize tracking-wider text-white opacity-70">
            an online cloud storage
          </h2>
        </div>
        <div className="lower_part w-full flex-col flex  items-center justify-center h-[20%]">
          <p className="font-pop font-medium text-xl  tracking-wider text-white ">
            A powerful, yet easy-to-use
          </p>
          <p className="font-pop font-medium text-xl  tracking-wider text-white ">
            application for managing
          </p>
          <p className="font-pop font-medium text-xl  tracking-wider text-white ">
            photos, videos and 
          </p>
          <p className="font-pop font-medium text-xl  tracking-wider text-white ">
           other files online. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
