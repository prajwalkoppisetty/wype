"use client";
import React from 'react';
import Navbar from './Navbar';
import Mybutton from './button';
function Homepage() {
  return (
    <div
      className="min-h-screen w-full bg-center font-sans"
      style={{
        
        backgroundSize: '60%', // Reduce the image size to 75%
        backgroundRepeat: 'no-repeat', // Ensure it doesn't repeat
      }}
    >
      <div className="flex flex-col items-center justify-center text-center px-6">
        {/* Main Heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mt-16 md:mt-24 pt-16 text-black">
          WELCOME TO WYPE <span className="text-red-500">REVOLUTION</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-10 pt-5 text-black">
          GIVE YOUR VEHICLE THE
        </h2>
        <span className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 text-red-500">
          ROYAL TREATMENT
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 text-black">
          IT DESERVES WITH WYPE
        </h2>

        {/* Book Now Button */}
        <div >
          {/* <button className="bg-red-500 text-white text-lg md:text-xl font-medium py-3 px-10 rounded-full hover:bg-white hover:text-red-500 transition duration-300">
            BOOK NOW
          </button> */}
          <Mybutton argument="BOOK NOW" />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
