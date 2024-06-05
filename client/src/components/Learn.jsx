import React from 'react';
import { useNavigate } from 'react-router-dom';

function Learn() {
    const navigate = useNavigate();

    return (
        <div className='w-full h-screen bg-[#ECF0F1]'>
            <div className="navbar w-full flex items-center px-10 h-12 ">
                <button onClick={() => navigate(-1)} className='px-3 py-1 text-[#3498DB] text-lg font-pop font-semibold border-[3px] border-[#3498DB] rounded-md'>Back</button>
            </div>
            <div className='main_content w-full min-h-[90%] pt-2 px-5 sm:px-10 '>
                <h1 className='font-pop font-extrabold text-2xl  sm:text-5xl text-center text-[#3498DB]  '>Welcome to Zen Drive</h1>
                <h2 className='font-pop font-bold text-xl sm:text-3xl mt-2 sm:mt-10'>How Zen Drive works:</h2>
                <p className='font-pop font-medium text-md sm:text-lg mt-4'>
                    Zen Drive simplifies file management and storage. Here's a step-by-step breakdown of its functionality:
                </p>
                <ol className='font-pop font-medium text-sm sm:text-lg mt-4'>
                {["User Authentication: Users log in with their email and password credentials.", "File Upload: Users upload files, which are initially stored locally.", "Firebase Storage: Files are transferred to Firebase Storage for scalable and reliable storage.", "Document Details: Zen Drive captures document details, including URL, name, and user email.", "Database Storage: Captured document details are securely stored in the database.", "File Retrieval: Users can easily retrieve their files via the platform's user-friendly interface."].map((items, index) => {
                     return   <li >{items}</li>
                            
                            
                })}
                </ol>
               
            </div>
        </div>
    );
}

export default Learn;
