import React from 'react';
import Image from 'next/image';
import '../app/globals.css';
import Mybutton from './button';

function Secondslide() {
  return (
    <div className='secondslide flex items-center justify-center h-screen'>
      <div className="logo text-center">
        <h1 className="text-4xl md:text-9xl font-bold text-white bg-slate-700">WYPE</h1>
        <p className="mt-1 md:mt-2 text-sm md:text-6xl text-black bg-white">REVIVE - RIDE - RAPTURE</p>
        <div className="mt-10 md:mt-16">
      <button className="bg-red-500 text-white text-lg md:text-xl font-medium py-3 px-10 rounded-full hover:bg-white hover:text-red-500 transition duration-300">
        BOOK NOW
      </button>
    </div>
      </div>
    </div>
  );
}

export default Secondslide;
