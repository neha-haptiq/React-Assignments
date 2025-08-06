import React from "react";
import { FaBook } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  const categories = [
    "Fiction",
    "Non-Fiction",
    "History",
    "Biography",
    "Adventure",
    "Children",
  ];

  return (
    <div className="bg-white w-full py-12">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h3 className="text-3xl font-bold mb-2">Book Categories</h3>
        <p className="text-sm mb-12 text-gray-700">
          Explore books by categories you love.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => navigate(`/category/${category}`)}
              className="cursor-pointer flex flex-col items-center text-center hover:scale-105 transition"
            >
              <div className="bg-gray-200 rounded-full p-6 mb-4 flex items-center justify-center w-20 h-20">
                <FaBook className="text-indigo-900 text-3xl" />
              </div>
              <h4 className="font-semibold text-lg mb-2">{category}</h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Discover the best books in {category}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
