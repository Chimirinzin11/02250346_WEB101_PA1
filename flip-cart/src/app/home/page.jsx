"use client";

import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { homePicks } from "@/data/products";
import { useState } from "react";

export default function HomePage() {

  const [filter, setFilter] = useState("All");

  const filtered = homePicks.filter((p) => {
    if (filter === "Under ₹1000") return p.price < 1000;
    if (filter === "Under ₹5000") return p.price < 5000;
    if (filter === "Top Rated") return p.rating >= 4.5;
    return true;
  });

  return (
    <main className="bg-[#f1f3f6] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6">

        {/* Back button */}
        <Link href="/">
          <button className="mb-4 flex items-center gap-2 text-sm text-blue-600 hover:underline">
            ← Back to Home
          </button>
        </Link>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Home Picks</h1>
          <p className="text-sm text-gray-500">{filtered.length} products</p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white px-4 py-3 rounded-sm shadow-sm mb-4 flex gap-3 flex-wrap">
          <span className="text-sm font-semibold text-gray-700">Filter:</span>
          {["All", "Under ₹1000", "Under ₹5000", "Top Rated"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-xs border px-3 py-1 rounded-full transition
                ${filter === f
                  ? "bg-blue-500 text-white border-blue-500"
                  : "border-gray-300 hover:border-blue-500 hover:text-blue-500"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500 col-span-5">No products found.</p>
          )}
        </div>

      </div>

      <Footer />
    </main>
  );
}