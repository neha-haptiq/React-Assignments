import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookCard from "./BookCard";

function SearchResults() {
  const location = useLocation();
  const query =
    new URLSearchParams(location.search).get("q")?.toLowerCase() || "";

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/bookdata.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Loaded data:", data); 
        setBooks(data.books); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load books:", err);
        setLoading(false);
      });
  }, []);

  const filteredBooks = books.filter((book) => {
    return (
      book.name.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.genre.join(", ").toLowerCase().includes(query)
    );
  });

  if (loading) return <p className="p-10">Loading books...</p>;

  return (
    <div className="p-10">
      <h2 className="text-xl font-semibold mb-6">
        Search Results for: <span className="text-teal-600">{query}</span>
      </h2>

      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
