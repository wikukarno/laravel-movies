import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/react";
import React from "react";

export default function Sidebar() {
    return (
        <aside
            id="asideBar"
            className="asidebar dark:bg-box-dark fixed start-0 top-0  h-screen overflow-hidden bg-white xl:!w-[280px] xl:[&.collapsed]:!w-[80px] [&.collapsed]:!w-[250px] !transition-all !duration-[0.2s] ease-linear delay-[0s] !w-0 xl:[&.collapsed>.logo-wrapper]:w-[80px]"
        >
            <div className="flex w-[280px] border-e border-[#edf2f9] dark:border-box-dark-up logo-wrapper items-center h-[71px] dark:bg-box-dark-up">
                <a href="index.html" className="block text-center">
                    <div className="logo-full">
                        <img className="p-2" src="/logo-light.png" alt="Logo" />
                    </div>
                    <div className="hidden logo-fold">
                        <img
                            className="p-[27px] max-w-[80px]"
                            src="images/logos/logo-fold.png"
                            alt="Logo"
                        />
                    </div>
                </a>
            </div>
            <nav
                id="navBar"
                className="navBar dark:bg-box-dark static start-0 top-[70px] z-[1035] h-full overflow-y-auto bg-white xl:!w-[280px] xl:[&.collapsed]:!w-[80px] [&.collapsed]:!w-[250px] !transition-all !duration-[0.2s] ease-linear delay-[0s] !w-0 pb-[100px] scrollbar [&.collapsed]:ps-[7px]"
            >
                <ul className="relative m-0 list-none px-[0.2rem]">
                    <li className="relative">
                        <NavLink
                            iconName="uil uil-apps"
                            href={route("admin.dashboard")}
                            active={route().current("admin.dashboard")}
                        >
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="relative">
                        <NavLink
                            iconName="uil uil-list-ul"
                            href={route("genre.index")}
                            active={route().current("genre.index")}
                        >
                            Genre
                        </NavLink>
                    </li>
                    <li className="relative mt-5">
                        <Link
                            href={route("logout")}
                            method="post"
                            as="button"
                            className="w-full py-3 px-4 text-center bg-red-600 text-sm font-medium text-white hover:bg-red-800 hover:text-white rounded-r-full"
                        >
                            Log Out
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
