import React from 'react';

function Mybutton({ argument }) {
  return (
    <div className="mt-10 md:mt-16">
      <button className="bg-red-500 text-white text-lg md:text-xl font-medium py-3 px-10 rounded-full hover:bg-white hover:text-red-500 transition duration-300">
        {argument}
      </button>
    </div>
  );
}

export default Mybutton;
