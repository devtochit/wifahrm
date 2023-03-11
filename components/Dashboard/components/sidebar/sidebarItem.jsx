import clsx from "clsx";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";

const SidebarItem = ({ title, path, icon }) => {
    const [isActive, setActive] = useState(false);
    const router = useRouter();

    // useEffect(() => {
    //     const pathname = router.pathname;
    //     if (pathname === path) {
    //         setActive(true);
    //         setTitle(title);
    //     } else {
    //         setActive(false);
    //     }
    // }, [router.pathname]);

    // const setTitle = (title) => {
    //     // Head.rewind();
    //     // Head.addMeta({
    //         name: "title",
    //         content: `${title} - Dashboard`,
    //     });
    // };

    return (
        <Link href={path}>
            <a
                className={clsx(
                    "flex justify-center lg:justify-start lg:pl-8 py-3 xs:py-4 hover:bg-secondary/50 cursor-pointer rounded-md select-none duration-200 text-primary-t/80",
                    isActive && "bg-secondary text-primary-t"
                )}
            >
                <div className="px-4 xs:px-0">{icon}</div>
                <div className="ml-3 text-xl font-bold hidden lg:block">
                    {title}
                </div>
            </a>
        </Link>
    );
};

export default SidebarItem;
