import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { fashionPicks } from "@/data/products";

export default function FashionPage() {
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

        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Fashion Picks</h1>
          <p className="text-sm text-gray-500">{fashionPicks.length} products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {fashionPicks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

      <Footer />
    </main>
  );
}