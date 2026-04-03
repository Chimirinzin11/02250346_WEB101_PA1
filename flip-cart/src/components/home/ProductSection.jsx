import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function ProductSection({ title, products, id, link }) {
  return (
    <div id={id} className="bg-white mt-4 px-4 pt-4 pb-2 rounded-sm shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        {link && (
          <Link href={link}>
            <button className="text-sm text-white bg-black px-6 py-2 rounded-sm hover:bg-green-700">
              View All
            </button>
          </Link>
        )}
      </div>
      <div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}