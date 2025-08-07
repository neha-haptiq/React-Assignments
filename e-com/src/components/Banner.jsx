import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="bg-[#f6f8fb] w-full py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-teal-500 text-lg font-semibold mb-2">
            Readers Cafe
          </h4>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            For All Your Reading Needs
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br className="hidden sm:block" />
            Rem mollitia quae neque repellendus eius delectus, facilis odio.
          </p>
          <Link
            to="/products"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium px-6 py-3 rounded-full transition duration-300"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/right.png"
            alt="Banner"
            className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
