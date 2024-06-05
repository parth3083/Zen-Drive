import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
      <div className='w-full h-screen bg-[#ECF0F1] flex flex-col items-center justify-center'>
          <h1 className=' font-pop font-extrabold text-9xl text-[#3498DB]'>Zen Drive</h1>
          <p className='font-pop font-medium opacity-70'>A powerful application for managing the photos, videos and other files online.</p>
          <Link to={"/signup"} className='px-3 py-1 border-[3px] border-[#3498DB] bg-[#3498DB] text-white rounded-md mt-10 font-pop font-medium text-xl'>Get Started</Link >

    </div>
  )
}

export default Home