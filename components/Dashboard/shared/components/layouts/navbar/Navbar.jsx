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
    <div>
      {/* <div>
                <SearchBar isScrolled={isScrolled} />
            </div>  */}

      <nav className="xs:ml-12 lg:ml-0 duration-200">
        <div className="flex justify-between items-center">
          <h1 className='text-xl font-bold'>Dashboard</h1>

          <div className="flex items-center gap-2">
            <div className="profile flex items-center gap-2">
              <Link href="/dashboard/shop" className="p-2 rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
                <svg
                  className="w-7 h-7 text-cusblack m-auto"
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
              </Link>
              <Link href="/dashboard/checkout" className="p-2 relative rounded-full hover:bg-gray-200 active:bg-gray-300 cursor-pointer duration-200">
                <svg
                  className="w-7 h-7 text-cusblack m-auto"
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
                {items.length > 0 && (
                  <div
                    className="h-5 w-5 absolute text-xs grid place-content-center font-semibold  text-white bg-cusblack rounded-full bottom-0 right-0"
                  >
                    {items.reduce((a, item) => a + item.quantity, 0)}
                  </div>
                )}
              </Link>

              {/* <div className=' flex items-center mt-2'>     <UserDropdownAvatar /> </div> */}
            </div>

            {/* <button onClick={handleOpen} className="burger xs:hidden p-2">
              <svg
                className="w-7 h-7 text-cusblack"
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

              */}

          </div>
        </div>

        {/* <MenuNav handleOpen={handleOpen} isOpen={isOpen} /> */}
      </nav>
      {/* <div className="relative flex items-center text-left">
            </div> */}

    </div>
  );
};

export default Navbar;
