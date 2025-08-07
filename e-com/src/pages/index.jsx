import React from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import About from "../components/About";
import Bestseller from "../components/Bestseller";

export default function HomePage() {
  return (
    <div className="w-full">
      <Banner />
      <Bestseller />
      <Categories />
      <About />
      {/* <Products /> */}
    </div>
  );
}
