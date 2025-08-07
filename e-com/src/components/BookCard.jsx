import React from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../redux/WishlistSlice";
import { addToCart } from "../redux/CartSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const isInWishlist = wishlist.some((item) => item.id === book.id);

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(book));
    if (isInWishlist) {
      toast.info(`${book.name} removed from wishlist`);
    } else {
      toast.success(`${book.name} added to wishlist`);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart(book));
    toast.success(`${book.name} added to cart`);
  };

  return (
    <Link to={`/book/${book.id}`}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative h-64 flex items-center justify-center bg-white">
        <img
          src={book.image_url}
          alt={book.name}
          className="max-h-full object-contain p-4"
        />
        <div
          className={`absolute top-3 right-3 text-lg cursor-pointer ${
            isInWishlist ? "text-red-500" : "text-gray-300 hover:text-red-500"
          }`}
          onClick={handleToggleWishlist}
        >
          <FaHeart />
        </div>
      </div>

      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold">{book.name}</h3>
        <p className="text-sm text-gray-500 mb-1">{book.author}</p>
        <p className="text-base font-medium text-gray-800 mb-2">
          {book.price.symbol}
          {book.price.amount}
        </p>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">
          {book.description}
        </p>

        <button
          onClick={handleAddToCart}
          className="mt-auto py-2 px-4 border border-teal-500 text-teal-500 font-semibold rounded-full hover:bg-teal-500 hover:text-white transition-colors duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
    </Link>
  );
}
