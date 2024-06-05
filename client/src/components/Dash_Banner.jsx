import React from 'react'
import { Link } from 'react-router-dom'

function Dash_Banner() {
  return (
      <div className='w-full h-screen py-10 bg-[#3498DB]'>
          <h1 className=' font-pop font-extrabold text-white text-center text-5xl capitalize'>Zen drive</h1>
          <div className='w-full h-[90%] flex flex-col items-center py-3 justify-between '>
              <div className="upper w-full h-fit  flex items-center justify-center flex-col gap-2">
                  <Link to={'/dash'}><h1 className=' font-pop text-white font-medium text-lg'>Home</h1></Link>
                  
              </div>
              <div className="lower w-full h-fit  flex items-center justify-center flex-col gap-2">
                  <Link to={'/learn'}><h1 className=' font-pop text-white font-medium text-lg'>Learn more</h1></Link>
                  <Link to={'/info'}><h1 className=' font-pop text-white font-medium text-lg'>Details</h1></Link>
              </div>
          </div>
    </div>
  )
}

export default Dash_Banner