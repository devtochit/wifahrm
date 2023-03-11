import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useSelector } from "react-redux";

function Basket() {
  const {items} = useSelector((state) => state.cropReducers.CropSlice);

  if (items.length === 0) return null;

  return (
    <Link href="/dashboard/checkout">
      <div className="fixed lg:bottom-18 top-32  right-10 z-50 flex h-16 w-24 cursor-pointer items-center justify-center rounded-full bg-gray-300">
        {items.length > 0 && (
          <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full  bg-green-600 bg-gradient-to-r from-green-500 to-lime-800 text-[19px] font-bold text-white">
            {items.length}
          </span>
        )}
        <ShoppingBagIcon className="headerIcon h-8 w-8" />
      </div>
    </Link>
  );
}

export default Basket;

