"use client";
import React, { useState } from "react";
import "../app/globals.css";
import Image from "next/image";
import Mybutton from "./button";

function Services() {
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="services flex flex-col md:flex-row items-center md:items-start px-4 md:px-12">
      {/* Text Section */}
      <div className="service-text w-full md:w-1/2">
        {/* Who is Wype */}
        <h1 className="servicesheading text-2xl md:text-3xl lg:text-4xl font-semibold text-start mt-6">
          WHO IS <span className="text-red-500">WYPE</span>
        </h1>

        {/* Car Wash Subheading (Appears below Who is Wype on Desktop, above Image on Mobile) */}
        <h2 className="service-subheading text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 font-medium">
          CAR WASH & DETAILING SERVICES
        </h2>

        {/* Main Description Text */}
        <div className="servicestext text-sm md:text-base lg:text-sm xl:text-md mt-6 mb-6 leading-relaxed">
          <p className="text-gray-600">
            Welcome to Wype Washing Services, Where Cleanliness Meets Convenience!
          </p>
          <br />
          <p className="text-gray-600">
            At Wype, we understand the hustle and bustle of modern life can often leave little time
            for essential chores like car washing. That&apos;s why we&apos;ve made it our mission to
            revolutionize the way you keep your vehicle sparkling clean.
          </p>

          {/* Show only the first two paragraphs on mobile */}
          <div className="hidden md:block">
            <br />
            <p className="text-gray-600">
              Founded on the principles of efficiency, quality, and customer satisfaction, Wype
              Washing Services brings professional car washing right to your doorstep. Whether you&apos;re
              a busy professional, a parent juggling multiple responsibilities, or simply someone who
              values their time, we&apos;re here to make car maintenance hassle-free.
            </p>
          </div>

          {/* Paragraph hidden on mobile */}
          <div className={`text-gray-600 ${showFullText ? "block" : "hidden md:block"}`}>
            <br />
            <p>
              Our team comprises dedicated professionals who are passionate about delivering
              exceptional service. We use eco-friendly products and the latest techniques to ensure a
              thorough yet gentle clean for your vehicle, inside and out. From sedans to SUVs, we
              cater to all makes and models, treating each car with the care and attention it
              deserves.
            </p>
            <br />
            <p>
              What sets us apart is our commitment to convenience. With just a few taps on your phone,
              you can schedule a wash at a time and location that suits you best. No more waiting in
              line at the car wash or rearranging your busy schedule – we come to you, rain or shine.
            </p>
          </div>

          {/* Read More Button for Mobile */}
          <div className="md:hidden flex justify-center mt-4">
            <button
              onClick={handleReadMore}
              className="bg-red-500 text-white text-lg md:text-xl font-medium py-3 px-10 rounded-full hover:bg-white hover:text-red-500 transition duration-300"
            >
              {showFullText ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* Button Section */}
        <div className="hidden md:flex justify-center mt-6">
          <Mybutton text="BOOK NOW" />
        </div>
      </div>

      {/* Image Section */}
      <div className="servicesimage w-full md:w-1/2 mt-6 md:mt-0 order-2 md:order-1">
        <Image
          src="/carwash.jpg"
          alt="CARWASH IMAGE"
          width={400}
          height={225}
          className="rounded-lg shadow-lg image mt-4 md:mt-14"
        />
      </div>

      {/* Button for Mobile */}
     
    </div>
  );
}

export default Services;
