import SearchBar from "./SearchBar";
import CategoryNav from "./CategoryNav";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">

      <div className="bg-black px-6 py-3 flex items-center">

        {/* LEFT */}
        <div className="flex items-center gap-4 flex-shrink-0">

          {/* Logo — clicks to home */}
          <Link href="/">
            <div className="cursor-pointer">
              <p className="text-yellow-300 font-bold text-xl italic leading-none">
                Flipkart-Clone
              </p>
              <p className="text-white text-xs italic">
                Explore <span className="underline text-yellow-300">Plus</span>
              </p>
            </div>
          </Link>

          <p className="text-white text-sm whitespace-nowrap hidden md:block">
            From our store to your door—fast and easy
          </p>
        </div>

        {/* SEARCHBAR*/}
        <div className="flex-1 flex justify-center px-4">
          <div className="w-full max-w-xl">
            <SearchBar />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <button className="bg-white text-black text-sm font-bold px-6 py-1.5 rounded-sm hover:bg-gray-50">
            Login
          </button>

          <button className="text-white text-sm font-medium whitespace-nowrap">
            Become a Seller
          </button>

          <button className="text-white text-sm font-medium">
            More
          </button>

          <button className="text-white text-sm font-medium flex items-center gap-1">
            <FaShoppingCart />
            <span>Cart</span>
          </button>
        </div>

      </div>

      <CategoryNav />

    </header>
  );
}