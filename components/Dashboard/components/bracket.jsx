import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSelector } from "react-redux";

function Basket() {
  const { items } = useSelector((state) => state.cropReducers.CropSlice);

  if (items.length === 0) return null;

  return (
    <Link href="/dashboard/checkout">
      <div className="fixed lg:bottom-18 lg:top-28 lg:flex right-12 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-300">
        {items.length > 0 && (
          <span className="absolute -right-1 -top-2 z-0 flex h-5 w-5 items-center justify-center rounded-full  bg-green-600 bg-gradient-to-r from-green-500 to-lime-800 font-bold text-white">
            {items.length}
          </span>
        )}
        <ShoppingBagIcon className="headerIcon h-6 w-6" />
      </div>
    </Link>
  );
}

export default Basket;

