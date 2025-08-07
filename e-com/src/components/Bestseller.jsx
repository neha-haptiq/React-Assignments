import React, { useEffect, useState } from "react";
import BookCard from "./BookCard"; // Adjust path if needed

export default function Bestsellers() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/data/bookdata.json")
      .then((res) => res.json())
      .then((data) => {
        const bestsellers = data.books
          .filter((book) => book.bestseller)
          .slice(0, 4); // Show only 4
        setBooks(bestsellers);
      })
      .catch((error) => console.error("Error loading bestsellers:", error));
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Bestsellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
