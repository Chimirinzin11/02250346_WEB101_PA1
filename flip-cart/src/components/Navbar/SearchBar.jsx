"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center w-full bg-white rounded-md overflow-hidden px-3">

      {/* 🔍 Icon */}
      <FaSearch className="text-gray-500 text-sm mr-2" />

      {/* Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products, brands and more"
        className="w-full py-2 text-sm text-gray-800 outline-none text-center placeholder:text-gray-500"
      />

    </div>
  );
}