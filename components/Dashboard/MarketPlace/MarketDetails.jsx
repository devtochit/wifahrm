import React, { useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
// import ProductCard from "../../components/productcard";
import Head from "next/head";
import { currencyFormatter } from "../../../utils";
import { CropData } from '../../../utils/data'
import Image from "next/image";






function MarketDetails({ cropPrice, cropName,cropCategory,cropData,handleSubmit }) {
  const [selectedSize, setSelectedSize] = useState(0);
  const dispatch = useDispatch();
  const [imgSelected, setImgSelected] = useState(0);

//   if (!dataItem || !dataAlso) return <NotFound />;

  return (
    <>
      <Head>
        {/* <title>{dataItem.name}</title> */}
      </Head>
      <div className="bg-cusgray min-h-screen pb-10">

        <div className="max-w-4xl mx-auto min-h-screen pt-16">
          <div className="flex justify-between place-items-center py-4 px-1 mb-4">
            <Link href="/shop">
              <div className="w-9 h-9 shadow-lg bg-white text-cusblack hover:bg-cusblack hover:text-white duration-200 cursor-pointer rounded-full flex justify-center place-items-center">
                <svg
                  className="w-4 h-4 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </Link>
            <h4 className="text-cusblack text-md">Product Details</h4>
            <div className="w-8"></div>
          </div>

          <div className="w-full bg-white md:rounded-2xl shadow-lg md:py-8 md:px-10 md:flex overflow-hidden">
            <div className="photo md:w-1/3">
              <div>
                < Image src={CropData[5].imageSrc}
                  className=" h-60 object-cover w-full md:rounded-2xl"
                  // src={dataItem.prop[0].image[imgSelected]}
                  alt=""
                />
              </div>
              {/* <div className="px-2 md:px-0 flex mt-4">
                {dataItem.prop[0].image.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    onClick={() => setImgSelected(idx)}
                    className={`${
                      imgSelected == idx
                        ? `border-2 border-cusblack filter brightness-90 `
                        : ``
                    } md:w-14 md:h-14 h-16 w-16 rounded-xl object-cover mr-3 cursor-pointer duration-100 `}
                    alt=""
                  />
                ))}
              </div> */}
            </div>
            <div className="detail px-2 md:px-0 mt-3 md:mt-0 md:ml-6 py-2 md:w-2/3">
              <p className="flex place-items-center text-sm text-gray-400">
                { cropCategory}
                <span className="mx-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {cropCategory}
              </p>
              <h1 className="text-3xl text-cusblack font-medium my-3">
                {cropName}
              </h1>
               {currencyFormatter(cropPrice)}

              <div className="sizes text-sm text-gray-400">
                <p className="mb-2">Select size</p>
                <div className="flex">
                  {/* {dataItem.prop[0].size.map((size, idx) => (
                    <button
                      onClick={() => setSelectedSize(idx)}
                      key={idx}
                      className={`${
                        selectedSize === idx
                          ? `bg-cusblack text-white`
                          : `text-cusblack border border-cusblack`
                      } mr-2 duration-200 flex place-items-center justify-center rounded-full w-12 h-12 cursor-pointer hover:bg-cusblack hover:text-white`}
                    >
                      {size}
                    </button>
                  ))} */}
                </div>
              </div>
              <div className="buttoncart flex mt-5 w-full">
                <button
                  onClick={()=>{handleSubmit(cropData)}}
                  className="w-4/5 md:w-3/5 bg-cusblack overflow-hidden py-4 text-white rounded-lg text-sm active:bg-gray-800 duration-100"
                >
                  <motion.span
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className="flex justify-center place-items-center overflow-hidden"
                  >
                    Add to basket
                    <span>
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </span>
                  </motion.span>
                </button>

              </div>
            </div>
          </div>

          <div className="text-cusblack p-2 md:px-10 md:py-6 mt-14 bg-white md:rounded-2xl shadow-lg">
            <p className="mb-4 font-medium text-lg">You may also like:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-x-4 gap-y-6">
              {/* {dataAlso
                .filter((it, idx) => it.name != dataItem.name)
                .map((data, idx) => {
                  if (idx < 4)
                    return <ProductCard key={data.slug} item={data} />;
                })} */}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}



export default MarketDetails;