import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { selectCategory } from "../../../redux/slice/marketplace/marketplaceSlice";
import { useDispatch } from "react-redux";

function TopCategory({ categories }) {
    const dispatch = useDispatch();

    const handleCategoryClick = (category) => {
        dispatch(selectCategory(category));
    };

    const { asPath } = useRouter();
    useEffect(() => {
        setIsActive(asPath);
    }, [asPath]);

    const [isActive, setIsActive] = useState("dashboard/shop");
    return (
        <div className="navbot bg-cusgray z-30 w-full px-1 md:px-0">
            <div className=" mx-auto md:flex place-items-center max-w-6xl2xl:max-w-7xl">
                <div className="category overflow-x-auto flex flex-wrap gap-2 place-items-center py-2">

                    <button
                        onClick={() => handleCategoryClick("")}
                        className={`bg-cusblack text-white shadow-lg py-2.5 px-6 rounded-3xl text-xs`}
                    >
                        All items
                    </button>

                    {categories.map((cat, idx) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className={`${isActive
                                ? `bg-cusblack text-white shadow-lg `
                                : `bg-white text-cusblack`
                                } py-2.5 px-6 rounded-3xl text-xs`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                {/* <Search /> */}
            </div>
        </div>
    );
}

export default TopCategory;
