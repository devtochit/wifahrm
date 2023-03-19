import React from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { removeFromBasket, updateQuantity, minusQuantity } from "../../../redux/slice/Crop/cropSlice";
import { motion } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import { currencyFormatter } from "../../../utils";

function BasketProduct({ items, id }) {
  console.log('hey im inside backetpr',id)
  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id:items[0].id}));
    toast.error(`${items[0].cropName} removed from basket`, {
      position: "top-center",
    });
  };

  const minusCrop = () => {
    if (items[0].quantity > 1)     dispatch(minusQuantity({id:items[0].id,quantity:items[0].quantity}));

  };

  const AddCrop = () => {
    dispatch(updateQuantity({id:items[0].id,quantity:items[0].quantity}));
  };



  return (
    <div
      className="product md:flex justify-between mb-6"
      suppressHydrationWarning
    >
      <Link href={"/product/" + items.slug}>
        <div className="image md:flex cursor-pointer">
          <motion.div
            initial={{ scale: 1.5, x: 50, y: -50, opacity: 0 }}
            animate={{ scale: 1, x: 0, y: 0, opacity: 1 }}
          >
            <img
              className="w-full md:w-32 h-32 object-cover rounded-xl"
              // src={items.prop[0].image[0]}
              alt=""
            />
          </motion.div>
          <div className="ml-3 flex flex-col text-black justify-between py-2">
            <p className="font-medium ">{items[0].cropName}</p>
            <ul className="text-xs md:text-sm leading-relaxed text-black">
              <li>ID: {items[0].id}</li>
              <li>Amount: {items[0].cropPrice}</li>
              <li>Category: {items[0].cropCategory}</li>
              <li>Quantity: {items[0].quantity}</li>
              {/* <li>Amount: {items[0J].amount }</li> */}
            </ul>
          </div>
        </div>
      </Link>
      <div className="flex flex-col justify-between py-1">
        {/* <NumberFormat
          value={items.cropPrice}
          className="font-semibold text-cusblack text-right"
          displayType={"number"}
          thousandSeparator={true}
          prefix={"NGN"}
          renderText={(value, props) => (
            <h1 className="font-semibold text-cusblack text-right" {...props}>
              {value}
            </h1>
          )}
        /> */}
             {currencyFormatter(items[0].cropPrice)}
        <div className="flex ml-auto text-cusblack mt-1 md:mt-0">
          <button
            onClick={minusCrop}
            className="border-2  border-black active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            </svg>
          </button>
          <button
            onClick={AddCrop}
            className="border-2 border-black active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100 mx-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
          <button
            onClick={removeItemFromBasket}
            className="border-2 border-black active:bg-gray-800 rounded-sm p-1 hover:bg-cusblack hover:text-white duration-100 text-xs px-2 font-medium"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}

export default BasketProduct;
