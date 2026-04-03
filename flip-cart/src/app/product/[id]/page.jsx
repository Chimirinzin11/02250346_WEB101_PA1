import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { deals, topElectronics, fashionPicks, homePicks } from "@/data/products";

const allProducts = [...deals, ...topElectronics, ...fashionPicks, ...homePicks];

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = allProducts.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="bg-[#f1f3f6] min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-gray-500">Product not found.</p>
          <Link href="/">
            <button className="mt-4 text-blue-600 hover:underline">← Back to Home</button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-[#f1f3f6] min-h-screen">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 py-6">

        <Link href="/">
          <button className="mb-4 text-sm text-blue-600 hover:underline">
            ← Back to Home
          </button>
        </Link>

        <div className="bg-white rounded-sm shadow-sm p-6 flex flex-col md:flex-row gap-8">

          <div className="flex-shrink-0 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-64 h-64 object-contain"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                {product.rating} ★
              </span>
              <span className="text-sm text-gray-500">
                {product.reviews?.toLocaleString()} reviews
              </span>
            </div>

            <div className="mb-4">
              <p className="text-3xl font-bold text-gray-900">
                ₹{product.price.toLocaleString()}
              </p>
              <p className="text-sm text-gray-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </p>
              <p className="text-green-600 font-semibold">
                {product.discount}% off
              </p>
            </div>

            <p className="text-sm text-gray-500 mb-6">
              Category: <span className="font-medium">{product.category}</span>
            </p>

            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-sm">
                Add to Cart
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-8 py-3 rounded-sm">
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}