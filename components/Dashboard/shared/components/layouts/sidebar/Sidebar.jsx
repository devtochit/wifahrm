import { Home, Wind2, Tree, AddSquare, ReceiptItem } from 'iconsax-react';
import Link from "next/link";
import styles from "/styles/Navbar.module.css"
import { useRouter } from "next/router";
import { useEffect } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const router = useRouter();
    const items = {
        home: {
            title: "Home",
            path: "/dashboard",
            icon: <Home size={20} color="#37d67a" variant="TwoTone" />,
        },
        marketplace: {
            title: "Market Place",
            path: "/dashboard/shop",
            icon: <Tree size={20} color="#37d67a" variant="TwoTone" />,
        },

        cultivatecrop: {
            title: "Cultivate ",
            path: "/dashboard/cultivatecrop",
            icon: <AddSquare size={20} color="#37d67a" variant="TwoTone" />,
        },
        tradeZone: {
            title: "tradezone",
            path: "/dashboard/tradezone",
            icon: <ReceiptItem size={20} color="#37d67a" variant="TwoTone" />,
        },
        analysis: {
            title: "analysis",
            path: "/dashboard/analysis",
            icon: <Wind2 size={20} color="#37d67a" variant="TwoTone" />,
        },
    };

    return (
        <div className='relative'>
            <div className="absolute top-0">
                <span className={styles.logo__text}>
                    WiFahrm
                </span>
            </div>
            <div className="h-screen hidden xs:flex flex-col items-center justify-between sticky top-0">
                <div className="w-full mt-10">


                    <div className="pt-3 space-y-2 w-max">
                        <SidebarItem {...items.home} />
                        <SidebarItem {...items.marketplace} />
                        <SidebarItem {...items.cultivatecrop} />
                        <SidebarItem {...items.tradeZone} />
                        <SidebarItem {...items.analysis} />
                    </div>
                </div>

            </div>
            <div className="xs:hidden fixed left-0 bottom-0 h-16 w-full p-4 bg-primary/80 backdrop-blur-md z-20">
                <div className="flex items-center justify-between font-bold ">
                    <SidebarItem {...items.home} />
                    <SidebarItem {...items.marketplace} />
                    <SidebarItem {...items.cultivatecrop} />
                    <SidebarItem {...items.tradeZone} />
                    <SidebarItem {...items.analysis} />
                    {/* <SidebarItem {...items.AddCrop} /> */}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
