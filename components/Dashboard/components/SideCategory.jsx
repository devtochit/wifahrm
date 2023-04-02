import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectCategory } from "../../../redux/slice/marketplace/marketplaceSlice";

function SideCategory({ categories }) {
  const dispatch = useDispatch()


  const handleCategoryClick = (category) => {
    dispatch(selectCategory(category));
  };



  console.log(categories)

  return (
    <div className="bg-white rounded-3xl px-5 py-6 shadow-lg w-2/3 md:w-1/2 lg:w-auto">
      <h3 className="font-semibold mb-3 text-lg text-cusblack">Categories</h3>
      <ul className="leading-10 text-xs text-gray-400">
        <li>
          <button onClick={dispatch(selectCategory(''))} className="font-semibold text-cusblack cursor-pointer">
            All products
          </button>
        </li>
        {categories.map((category, idx) => (
          <li key={idx}>
            <button
              onClick={() => handleCategoryClick(category)}

              className="font-semibold text-cusblack cursor-pointer">
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideCategory;

