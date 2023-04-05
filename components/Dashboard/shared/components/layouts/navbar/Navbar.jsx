import { useEffect, useState } from "react";
import clsx from "clsx";
import SearchBar from "./searchbar/SearchBar";
import { useRouter } from "next/router";

// import UserDropdownAvatar from "../../../../user/components/UserDropdown";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../../../../../../redux/slice/Crop/cropSlice";
import MenuNav from "../../../../components/menunav";

import Link from "next/link";


const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);
  const router = useRouter();
  const data = useSelector(selectBasketItems);
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e) => {
    if (window.scrollY < 25) return setScrolled(false);
    return setScrolled(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleScroll(e));
    return () =>
      window.removeEventListener("scroll", (e) => handleScroll(e));
  });

  useEffect(() => {
    setItems(data);
  }, [data]);

  return (
    <div
      className={clsx(
        "z-50  h-20  backdrop-blur-md sticky top-0 duration-200"
      )}
    >
      {/* <div>
                <SearchBar isScrolled={isScrolled} />
            </div>  */}

      <nav className="w-full mx-auto fixed  z-30 py-2 md:px-0 duration-200">
        <div className="px-2 navtop relative max-w-6xl 2xl:max-w-7xl mx-auto flex justify-between place-items-center py-1.5">
          <div className="burger flex flex-col items-center">
            <button onClick={handleOpen}>
              <svg
                className="w-10 h-10 text-cusblack xs:hidden "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <h3 className="hidden md:inline text-md mr-2 font-semibold ml-3 text-cusblack">

            </h3>
          </div>
          <div className="profile flex items-center gap-4 place-items-center">
            <Link href="/dashboard/shop">
              <div className="w-10 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
                <svg
                  className="w-10 h-10 text-cusblack m-auto"
                  fill="#F2F5F6"
                  stroke="#37d67a"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
            </Link>
            <div
              onClick={() => router.push("/dashboard/checkout")}
              className="w-10 relative flex items-center h-8 mr-1 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200"
            >
              <svg
                className="w-10 h-10 text-cusblack m-auto"
                fill="#F2F5F6"
                stroke="#37d67a"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {items.length > 0 ? (
                <div
                  className={`flex
                } absolute text-base font-semibold justify-center text-white text-center w-5 h-5 bg-cusblack rounded-full bottom-0 right-0`}
                >
                  {items.reduce((a, item) => a + item.quantityPlanted, 0)}
                </div>
              ) : (
                ""
              )}



            </div>

            {/* <div className=' flex items-center mt-2'>     <UserDropdownAvatar /> </div> */}
          </div>
        </div>

        <MenuNav handleOpen={handleOpen} isOpen={isOpen} />
      </nav>
      {/* <div className="relative flex items-center text-left">
            </div> */}

    </div>
  );
};

export default Navbar;
