import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard"; 

export default function Products() {
  const [books, setBooks] = useState([]);

  

  useEffect(() => {
    fetch("/data/bookdata.json")
      .then((res) => res.json())
      .then((data) => setBooks(data.books))
      .catch((error) => console.error("Error fetching local JSON:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
