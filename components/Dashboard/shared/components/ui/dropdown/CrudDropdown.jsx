import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Dropdown from "../../ui/dropdown/Dropdown";

const CrudDropdown = ({ element, ontradenowClick, onDeleteClick }) => {
    return (
        <Dropdown element={element}>
            <Menu.Item>
                {({ active }) => (
                    <a
                        className={clsx(
                            active ? "bg-accent" : "text-primary-t",
                            "block px-4 py-2 text-sm cursor-pointer"
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
