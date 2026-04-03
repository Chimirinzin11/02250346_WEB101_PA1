"use client";

import { categories } from "@/data/products";

export default function CategoryNav() {

  const handleClick = (name) => {
    const id = name.toLowerCase(); // "Electronics" → "electronics"
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white shadow-sm px-6 py-2 flex overflow-x-auto">
      {categories.map((cat, index) => {
        const Icon = cat.icon;
        return (
          <div
            key={cat.name}
            onClick={() => handleClick(cat.name)}
            className={`flex flex-col items-center text-xs text-gray-700 
              hover:text-[#2874f0] whitespace-nowrap font-medium pb-1 px-4 
              cursor-pointer
              ${index !== categories.length - 1 ? "border-r border-gray-300" : ""}`}
          >
            <Icon className="text-xl mb-1" />
            {cat.name}
          </div>
        );
      })}
    </div>
  );
}