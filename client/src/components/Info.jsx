import React from 'react'
import image1 from "../assets/p.png"
import { useNavigate } from 'react-router-dom'

function Info() {
    const navigate= useNavigate()
  return (
      <div className='w-full h-screen  pt-5 bg-[#ECF0F1]'>
                      <div className="navbar w-full flex items-center px-10 h-12 ">
                <button onClick={() => navigate(-1)} className='px-3 py-1 text-[#3498DB] text-lg font-pop font-semibold border-[3px] border-[#3498DB] rounded-md'>Back</button>
            </div>
          <div className='w-full flex flex-col px-16 sm:px-0 items-center gap-5'>
              <div className='image_container w-[25vw] sm:w-[15vw] h-[25vw] sm:h-[15vw] overflow-hidden rounded-full bg-red-300'>
                  <img src={image1} className='w-full h-full object-cover' alt="" />
          </div>
              <h1 className=' font-pop font-medium text-2xl'>Hey 👋, I am Parth</h1>
              <h1 className=' font-pop font-normal text-sm sm:text-lg'>I have created Zen Drive, it is online cloud storage for storing your files.</h1>
          </div>
          <div className='w-full px-6  sm:px-16'>
          <h1 className='sm:mt-16 mt-10 font-pop text-md sm:text-xl'>I have used the following technologies in this project : </h1>
          <h1 className='sm:mt-5 mt-3 font-pop text-sm  sm:text-lg'><span className=' font-semibold font-pop'>React.js  </span> : A JavaScript library used for building the frontend user interface and managing state.        </h1>
          <h1 className=' font-pop text-sm  sm:text-lg'><span className=' font-semibold font-pop'>Express.js</span> :  A Node.js framework used for building the backend server and handling API requests.             </h1>
          <h1 className=' font-pop text-sm  sm:text-lg'><span className=' font-semibold font-pop'>Mongo Db  </span> :  A NoSQL database used for storing user information and document details        </h1>
          <h1 className=' font-pop text-sm  sm:text-lg'><span className=' font-semibold font-pop'>Node.js   </span> : A JavaScript runtime environment used for running server-side code and handling backend logic.         </h1>
          <h1 className=' font-pop text-sm  sm:text-lg'><span className=' font-semibold font-pop'>FireBase  </span> : A cloud storage service used for storing user-uploaded files securely.         </h1>
         </div>

    </div>
  )
}

export default Info