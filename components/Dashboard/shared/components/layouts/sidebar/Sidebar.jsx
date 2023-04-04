import { Home,Wind2,Tree, AddSquare, ReceiptItem } from 'iconsax-react';
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
    const router = useRouter();
    const items = {
      home: {
        title: "Home",
        path: "/dashboard",
        icon: <Home size={32}    color="#37d67a" variant="TwoTone" />,
      },
      marketplace: {
        title: "Market Place",
        path: "/dashboard/shop",
        icon: <Tree size={32} color="#37d67a" variant="TwoTone"/>,
      },

      cultivatecrop: {
        title: "Cultivate ",
        path: "/dashboard/cultivatecrop",
        icon: <AddSquare size={32}  color="#37d67a" variant="TwoTone"/>,
      },
        tradeZone: {
            title: "tradezone",
            path: "/dashboard/tradezone",
            icon: <ReceiptItem size={32} color="#37d67a" variant="TwoTone" />,
        },
        analysis: {
            title: "analysis",
            path: "/dashboard/analysis",
            icon: <Wind2 size={26} color="#37d67a" variant="TwoTone" />,
        },
    };

    return (
        <>
            <div className="h-screen hidden xs:flex w-28 lg:w-56 px-6 flex-col items-center justify-between sticky top-0">
                <div className="w-full">
                    <div className="h-20 text-xl font-extrabold flex items-center justify-center">
                        <Link
                            href={items.home.path}
                            className="hover:text-accent"
                        >
                            Sidebar
                        </Link>
                    </div>
                    <div className="pt-3 space-y-2">
                        <SidebarItem {...items.home} />
                        <SidebarItem {...items.marketplace} />
                        <SidebarItem {...items.cultivatecrop} />
                        <SidebarItem {...items.tradeZone} />
                        <SidebarItem {...items.analysis} />


                    </div>
                </div>
              
            </div>
            <div className="xs:hidden fixed bottom-0 h-16 w-full bg-primary/80 backdrop-blur-md z-20">
                <div className="flex items-center justify-center gap-10 font-bold h-full">
                    <SidebarItem {...items.home} />
                    <SidebarItem {...items.marketplace} />
                    <SidebarItem {...items.cultivatecrop} />
                    {/* <SidebarItem {...items.AddCrop} /> */}
                </div>
            </div>
        </>
    );
};

export default Sidebar;
