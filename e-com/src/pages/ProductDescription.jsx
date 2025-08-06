// src/pages/ProductDescription.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart , removeFromCart} from "../redux/CartSlice";
import { toggleWishlist } from "../redux/WishlistSlice";
import { FaHeart } from "react-icons/fa";


export default function ProductDescription() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  const isInCart = cart.some((item) => item.id === id);
  const isInWishlist = wishlist.some((item) => item.id === id);

  useEffect(() => {
    fetch("/data/bookdata.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.books.find((b) => b.id === id);
        setBook(foundBook);
      });
  }, [id]);

  if (!book) return <p className="p-6 text-center">Loading book details...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 mt-8 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <img
            src={book.image_url}
            alt={book.name}
            className="w-64 h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{book.name}</h1>
          <p className="text-lg text-gray-700">
            by <span className="font-semibold">{book.author}</span>
          </p>
          <p className="text-sm text-gray-600 italic">{book.description}</p>

          <div className="text-sm text-gray-700 space-y-1 pt-2 border-t mt-4">
            <p>
              <strong>Published:</strong> {book.published_date}
            </p>
            <p>
              <strong>Publisher:</strong> {book.publisher}
            </p>
            <p>
              <strong>ISBN-13:</strong> {book.isbn_13}
            </p>
            <p>
              <strong>Language:</strong> {book.language}
            </p>
            <p>
              <strong>Price:</strong> {book.price.symbol}
              {book.price.amount}
            </p>
            <p>
              <strong>Rating:</strong> {book.rating} ⭐ ({book.num_reviews}{" "}
              reviews)
            </p>
            <p>
              <strong>Stock:</strong> {book.stock_quantity} available
            </p>
          </div>

    <div className="flex items-center gap-4 mt-6">
  {/* Cart Add/Remove Button */}
  {isInCart ? (
    <button
      onClick={() => dispatch(removeFromCart(book.id))}
      className="py-2 px-4 font-semibold rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-300"
    >
      Remove from Cart
    </button>
  ) : (
    <button
      onClick={() => dispatch(addToCart(book))}
      className="py-2 px-4 font-semibold rounded-full border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-colors duration-300"
    >
      Add to Cart
    </button>
  )}

  {/* Wishlist Add/Remove Heart */}
  <div
    className={`text-xl cursor-pointer transition-colors duration-300 ${
      isInWishlist ? "text-red-500" : "text-gray-300 hover:text-red-500"
    }`}
    onClick={() => dispatch(toggleWishlist(book))}
    title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
  >
    <FaHeart />
  </div>
</div>


        </div>
      </div>
    </div>
  );
}
