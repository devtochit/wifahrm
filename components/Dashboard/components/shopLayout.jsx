import React, { useState } from "react";
import ShopCarousel from "./shopCarousel";
import SideCategory from "./SideCategory";
import TopCategory from "./topCategory";


function Layout({ children, categories, setSort }) {
  const [open, setOpen] = useState(false);
  const [grid, setGrid] = useState(4);
  const [sortOpen, setSortOpen] = useState(false);
  return (
    <div className="">
      <TopCategory categories={categories} />
      <div className="grid grid-cols-4 gap-x-2">
        <div
          onClick={() => setOpen(!open)}
          className={`${open ? `fixed` : `hidden`
            } lg:static lg:inline bg-gray-400 lg:bg-cusgray h-screen bg-opacity-30 flex w-full justify-center place-items-center top-0 lg:p-4`}
        >
          <SideCategory categories={categories} />
        </div>
        <div className="col-span-4 md:col-span-4 lg:col-span-3 flex flex-col py-4 mx-2 md:mx-0">
          <ShopCarousel />
          <div className="rounded-2xl overflow-hidden shadow-lg w-full bg-white mt-6 px-5 py-4">
            <div className="mb-3">
              <div className="flex justify-between place-items-center text-gray-600 text-sm relative">
                <div className="flex">
                  <button
                    onClick={() => setGrid(4)}
                    className="p-1 relative flex justify-center items-center rounded-full hover:bg-gray-100 active:bg-gray-200 cursor-pointer duration-200"
                  >
                    <svg
                      className="w-8 h-8 "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setGrid(2)}
                    className="p-1 relative flex justify-center items-center rounded-full hover:bg-gray-100 active:bg-gray-200 cursor-pointer duration-200"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                      />
                    </svg>
                  </button>
                </div>



                <button
                  onClick={() => setSortOpen(!sortOpen)}
                  className="flex place-items-center hover:bg-gray-100 py-1 px-2 rounded-md active:bg-gray-200"
                >
                  <svg
                    className="w-8 h-8 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                    />
                  </svg>
                  Sort
                  <svg
                    className="w-8 h-8 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`${sortOpen ? "absolute" : "hidden"
                    } top-7 shadow-lg rounded-md text-sm right-0 bg-white text-gray-500 z-20 px-2 py-2`}
                >
                  <ul>
                    <li className="py-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200">
                      <button
                        className="w-full"
                        onClick={() => {
                          setSort(0);
                          setSortOpen(false);
                        }}
                      >
                        Newest
                      </button>
                    </li>
                    <li className="py-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200">
                      <button
                        className="w-full"
                        onClick={() => {
                          setSort(1);
                          setSortOpen(false);
                        }}
                      >
                        Price low to high
                      </button>
                    </li>
                    <li className="py-1 px-2 rounded-sm hover:bg-gray-100 active:bg-gray-200">
                      <button
                        className="w-full"
                        onClick={() => {
                          setSort(2);
                          setSortOpen(false);
                        }}
                      >
                        Price high to low
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`grid grid-cols-2 md:grid-cols-${grid} lg:grid-cols-${grid} gap-x-4 gap-y-6`}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
