import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Dropdown from "../../ui/dropdown/Dropdown";

const CrudDropdown = ({ element, ontradenowClick,  }) => {
    return (
        <Dropdown element={element}>
            <Menu.Item>
                {({ active }) => (
                    <a
                        className={clsx(
                            active ? "cursor-pointer  rounded bg-green-600 bg-gradient-to-r from-green-500 to-lime-800 px-4 py-4 font-extrabold text-base text-white transition-all duration-300 focus:outline-none" : "text-white bg-green-500", "block px-5  py-4 text-base cursor-pointer"
                        )}
                        onClick={() => ontradenowClick()}
                    >
                        TradeNow
                    </a>
                )}
            </Menu.Item>
            {/* <Menu.Item>
                {({ active }) => (
                    <a
                        className={clsx(
                            active ? "bg-accent" : "text-primary-t",
                            "block px-4 py-2 text-sm cursor-pointer"
                        )}
                        onClick={() => onDeleteClick()}
                    >
                        Delete
                    </a>
                )}
            </Menu.Item> */}
        </Dropdown>
    );
};

export default CrudDropdown;
