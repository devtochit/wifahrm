// import { ChevronDownIcon } from "@heroicons/react/outline";
// import Image from "next/image";
// import { removeFromBasket } from "../../../redux/slice/Crop/cropSlice";
// import { useDispatch, useSelector } from "react-redux";
// import toast from "react-hot-toast";
// import { currencyFormatter } from "../../../utils/index";


// function CheckoutProduct({ id, items }) {
//   console.log(id)

//   const dispatch = useDispatch();
  
//   const removeItemFromBasket = () => {
//     dispatch(removeFromBasket(items[0].id));
//   }
  

//     toast.error(`${items[0].name} removed from basket`, {
//       position: "top-center",
//     });
//   };

//   return (
//     <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
//       <div className="relative h-44 w-44">
//         {/* <Image
//           src={urlFor(items[0].image[0]).url()}
//           layout="fill"
//           objectFit="contain"
//         /> */}
//       </div>

//       <div className="flex flex-1 items-end lg:items-center">
//         <div className="flex-1 space-y-4">
//           <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
//             <h4 className="font-semibold lg:w-96">{items[0].name}</h4>
//             <p className="flex items-end gap-x-1 font-semibold">
//               {items.length}
//               <ChevronDownIcon className="h-6 w-6 text-blue-500" />
//             </p>
//           </div>

//           <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
//             Show product details
//             <ChevronDownIcon className="h-6 w-6" />
//           </p>
//         </div>
//         <div className="flex flex-col items-end space-y-4">
//           <h4 className="text-xl font-semibold lg:text-2xl">
//           {currencyFormatter( items[0].amount )}

//           </h4>
//           <button
//             onClick={removeItemFromBasket}
//             className="text-blue-500 hover:underline"
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CheckoutProduct;
