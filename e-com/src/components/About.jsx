import React from "react";

export default function About() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto max-w-7xl px-4 flex flex-col lg:flex-row items-center">
        {/* Left Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="/about-img.png"
            alt="Bookstore illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">About Our Bookstore</h2>
          <p className="text-gray-700 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            dolorem est iste dolores tempora error eos, earum consequuntur quasi
            sapiente in sit? Architecto ducimus itaque tempora ipsam, iure enim
            nostrum. Ut facilis nam soluta, consequatur temporibus consectetur
            ex aliquid ratione
          </p>
        </div>
      </div>
    </section>
  );
}
