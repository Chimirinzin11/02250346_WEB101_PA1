import Link from "next/link";

export default function ProductCard({ product }) {
  const { id, name, price, originalPrice, discount, rating, image } = product;

  return (
    <Link href={`/product/${id}`}>
      <div className="bg-white border rounded-sm p-3 hover:shadow-md cursor-pointer w-48 flex-shrink-0">
        <img src={image} alt={name} className="w-full h-40 object-contain" />
        <p className="text-sm text-black font-bold mt-2 line-clamp-2">{name}</p>
        <div className="flex items-center gap-1 mt-1">
          <span className="bg-green-600 text-white text-xs px-1 rounded">
            {rating} ★
          </span>
        </div>
        <p className="font-bold mt-1">₹{price.toLocaleString()}</p>
        <p className="text-xs text-gray-400 line-through">₹{originalPrice.toLocaleString()}</p>
        <p className="text-xs text-green-600">{discount}% off</p>
      </div>
    </Link>
  );
}