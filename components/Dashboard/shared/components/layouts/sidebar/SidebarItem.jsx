import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";

const SidebarItem = ({ title, path, icon }) => {
    const [isActive, setActive] = useState(false);
    // const location = useLocation();

    // const setTitle = (title) => {
    //     document.title = title + " - Dashboard";
    // };

    // useEffect(() => {
    //     const pathname = location.pathname;
    //     if (pathname === path) {
    //         setActive(true);
    //         setTitle(title);
    //     } else {
    //         setActive(false);
    //     }
    // }, [location.pathname]);



    return (
        <Link
            href={path}
            className={clsx(
                "flex gap-3 p-2 hover:bg-secondary/20 cursor-pointer rounded-md select-none duration-200 text-primary-t/80 lg:w-full",
                isActive && "!bg-secondary !text-primary-t"
            )}
        >
            <i>{icon}</i>
            <p className="font-bold hidden lg:block w-max">
                {title}
            </p>
        </Link>
    );
};

export default SidebarItem;
