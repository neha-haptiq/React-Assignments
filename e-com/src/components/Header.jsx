import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../redux/AuthSlice";
import { toast } from "react-toastify";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cart);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [searchQuery, setSearchQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    dispatch(signOut());
    toast.success("You have been logged out.");
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-[#3C4B51] text-white">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center h-12 w-28">
          <img
            src="/logo.png"
            alt="readers cafe App Logo"
            className="h-full object-contain"
          />
        </NavLink>

        {/* Hamburger Icon (Mobile) */}
        <div
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" className="hover:text-gray-400">
            Home
          </NavLink>
          <NavLink to="/products" className="hover:text-gray-400">
            Books
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-400">
            About
          </NavLink>
          <NavLink to="/categories" className="hover:text-gray-400">
            Categories
          </NavLink>
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Cart */}
          <NavLink to="/cart" className="relative hover:text-gray-400 text-xl">
            <FaCartShopping />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {totalQuantity}
              </span>
            )}
          </NavLink>

          {/* Wishlist */}
          {isAuthenticated && (
            <NavLink to="/wishlist" className="hover:text-gray-400 text-xl">
              <CiHeart />
            </NavLink>
          )}

          {/* Profile */}
          {isAuthenticated && (
            <NavLink to="/profile" className="hover:text-gray-400 text-xl">
              <CgProfile />
            </NavLink>
          )}

          {/* Login/Logout */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="hover:text-gray-400 text-sm"
            >
              Logout
            </button>
          ) : (
            <NavLink to="/signin" className="hover:text-gray-400 text-sm">
              Login
            </NavLink>
          )}

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className="relative flex items-center bg-[#f5f5f5] rounded-full border border-gray-300 px-4 py-1.5 w-64"
          >
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow bg-transparent focus:outline-none text-sm text-black px-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-teal-500 p-2 rounded-full text-white text-lg"
            >
              <IoIosSearch />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <nav className="flex flex-col space-y-2">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400"
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400"
            >
              Books
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400"
            >
              About
            </NavLink>
            <NavLink
              to="/categories"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-400"
            >
              Categories
            </NavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <NavLink
              to="/cart"
              onClick={() => setMenuOpen(false)}
              className="relative text-xl hover:text-gray-400"
            >
              <FaCartShopping />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {totalQuantity}
                </span>
              )}
            </NavLink>

            {isAuthenticated && (
              <>
                <NavLink
                  to="/wishlist"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl hover:text-gray-400"
                >
                  <CiHeart />
                </NavLink>
                <NavLink
                  to="/profile"
                  onClick={() => setMenuOpen(false)}
                  className="text-xl hover:text-gray-400"
                >
                  <CgProfile />
                </NavLink>
              </>
            )}

            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setMenuOpen(false);
                }}
                className="text-sm hover:text-gray-400"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/signin"
                onClick={() => setMenuOpen(false)}
                className="text-sm hover:text-gray-400"
              >
                Login
              </NavLink>
            )}
          </div>

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="relative flex items-center bg-[#f5f5f5] rounded-full border border-gray-300 px-4 py-2 w-full"
          >
            <input
              type="text"
              placeholder="Search here..."
              className="flex-grow bg-transparent focus:outline-none text-sm text-black px-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="bg-teal-500 p-2 rounded-full text-white text-lg"
            >
              <IoIosSearch />
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
