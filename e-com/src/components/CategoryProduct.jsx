import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";  

export default function CategoryProduct() {
  const { categoryName } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/data/bookdata.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.books.filter((book) =>
          book.categories.map((c) => c.toLowerCase()).includes(categoryName.toLowerCase())
        );
        setBooks(filtered);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [categoryName]);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Books in "{categoryName}"
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
        {books.length > 0 ? (
          books.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p className="col-span-full text-center text-gray-500">No books found in this category.</p>
        )}
      </div>
    </div>
  );
}
