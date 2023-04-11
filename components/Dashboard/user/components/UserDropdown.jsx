import { useState } from "react";
import  Link  from "next/link";
import { Menu } from "@headlessui/react";
import { Settings, User as Profile, LogOut, User } from "react-feather";
import clsx from "clsx";
// import Avatar from "../../../../components/Dashboard/shared/components/ui/avatars/Avatar";
import Dropdown from "../../../../components/Dashboard/shared/components/ui/dropdown/Dropdown";
User
import LogoutModal from "./modals/LogoutModal";

const UserDropdownAvatar = ({ user }) => {
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);

    return (
        <>
            <Dropdown element={<User color="#37d67a" fontVariant='bold' className="h-7  font-black w-7" />}>
                <div>
                    <Menu.Item>
                        {({ active }) => (
                            <Link
                                href="/profile"
                                className={clsx(
                                    active ? "bg-accent" : "text-white",
                                    "block px-4 py-2 text-sm cursor-pointer"
                                )}
                            >
                                <span className="flex items-center">
                                    <Profile size={22} color="#37d67a" className="w-6 mr-2" />{" "}
                                    Profile
                                </span>
                            </Link>
                        )}
                    </Menu.Item>
                  
                </div>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={clsx(
                                active ? "bg-accent" : "text-white",
                                "block px-4 py-2 text-sm cursor-pointer"
                            )}
                            onClick={() => setLogoutModalOpen(true)}
                        >
                            <span className="flex items-center">
                                <LogOut color="#37d67a" size={20} className="w-6 mr-2" /> Logout
                            </span>
                        </a>
                    )}
                </Menu.Item>
            </Dropdown>
            <LogoutModal
                openNow={isLogoutModalOpen}
                onClose={() => setLogoutModalOpen(false)}
            />
        </>
    );
};

export default UserDropdownAvatar;
