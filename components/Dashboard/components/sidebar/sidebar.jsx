import {  Settings, User, Users, Tag } from "react-feather";
import { Home,Wind2,Tree, AddSquare, ReceiptItem } from 'iconsax-react';

import Link from "next/link";
import SidebarItem from "./sidebarItem";
import { useRouter } from "next/router";
import { useEffect } from "react";


const Sidebar = () => {
  const router = useRouter();
  const items = {
    home: {
      title: "Home",
      path: "/dashboard",
      icon: <Home size={32}    color="#37d67a" variant="TwoTone" />,
    },
    profile: {
      title: "Product",
      path: "/dashboard/products",
      icon: <Tree size={32} color="#37d67a" variant="TwoTone"/>,
    },
    settings: {
      title: "Create",
      path: "/dashboard/createfarm",
      icon: <Wind2 size={26} color="#37d67a" variant="TwoTone"/>,
    },
    users: {
      title: "Cultivate ",
      path: "/dashboard/cultivatecrop",
      icon: <AddSquare size={32}  color="#37d67a" variant="TwoTone"/>,
    },
    products: {
      title: "Checkout",
      path: "/dashboard/checkout",
      icon: <ReceiptItem size={32}  color="#37d67a" variant="TwoTone"/>,
    },
  };

  const setTitle = (title) => {
    document.title = title + " - Dashboard";
  };

  useEffect(() => {
    const pathname = router.pathname;
    for (const key in items) {
      if (pathname === items[key].path) {
        setTitle(items[key].title);
        break;
      }
    }
  }, [router.pathname]);

  return (
    <>
      <div className="h-screen hidden xs:flex w-28 lg:w-56 px-6 flex-col items-center justify-between sticky top-0">
        <div className="w-full">
          <div className="h-20 text-xl font-extrabold flex items-center justify-center">
            <Link href={items.home.path}>
              <a className="hover:text-accent text-green-900 font-extrabold text-2xl"> Wifahrm</a>
            </Link>
          </div>
          <div className="pt-3 space-y-2">
            {Object.keys(items).map((key) => (
              <SidebarItem
                key={key}
                title={items[key].title}
                path={items[key].path}
                icon={items[key].icon}
                isActive={router.pathname === items[key].path}
              />
            ))}
          </div>
        </div>
        {/* <div className="pb-3 w-full space-y-2">
          <SidebarItem {...items.profile} />
          <SidebarItem {...items.settings} />
        </div> */}
      </div>
      <div className="xs:hidden fixed bottom-0 h-16 w-full bg-primary/80 backdrop-blur-md z-20">
        <div className="flex items-center justify-center gap-20 font-bold h-full">
          {Object.keys(items).map((key) => (
            <SidebarItem
              key={key}
              title={items[key].title}
              path={items[key].path}
              icon={items[key].icon}
              isActive={router.pathname === items[key].path}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
