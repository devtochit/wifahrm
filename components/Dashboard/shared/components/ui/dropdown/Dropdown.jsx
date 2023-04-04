import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "react-feather";
// import styles "./dropdown.module.css";

const Dropdown = ({ element, children, showChevron }) => {
    return (
        <Menu as="div" className="relative  inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center items-center">
                    {element}
                    {showChevron && (
                        <ChevronDown
                            className="-mr-1 ml-2 h-6 w-6"
                            aria-hidden="true"
                            size={60}
                        />
                    )}
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className=" bg-cusblack overflow-hidden absolute right-0 z-20 mt-2 lg:w-56 w-26 origin-top-right divide-y divide-white/5 rounded-md bg-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="pt-0">
                    {children}
                </div>
                <div className="pb-0">
                </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default Dropdown;
