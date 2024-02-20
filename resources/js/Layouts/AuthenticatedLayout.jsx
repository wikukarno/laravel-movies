import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import Footer from "@/Components/Footer";
import Sidebar from "@/Includes/Sidebar";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    // return (
    //     <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
    //         <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
    //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //                 <div className="flex justify-between h-16">
    //                     <div className="flex">
    //                         <div className="shrink-0 flex items-center">
    //                             <Link href="/">
    //                                 <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
    //                             </Link>
    //                         </div>

    //                         <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
    //                             <NavLink
    //                                 href={route("admin.dashboard")}
    //                                 active={route().current("dashboard")}
    //                             >
    //                                 Dashboarddwedwdd
    //                             </NavLink>
    //                         </div>
    //                     </div>

    //                     <div className="hidden sm:flex sm:items-center sm:ms-6">
    //                         <div className="ms-3 relative">
    //                             <Dropdown>
    //                                 <Dropdown.Trigger>
    //                                     <span className="inline-flex rounded-md">
    //                                         <button
    //                                             type="button"
    //                                             className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
    //                                         >
    //                                             {user.name}

    //                                             <svg
    //                                                 className="ms-2 -me-0.5 h-4 w-4"
    //                                                 xmlns="http://www.w3.org/2000/svg"
    //                                                 viewBox="0 0 20 20"
    //                                                 fill="currentColor"
    //                                             >
    //                                                 <path
    //                                                     fillRule="evenodd"
    //                                                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                                                     clipRule="evenodd"
    //                                                 />
    //                                             </svg>
    //                                         </button>
    //                                     </span>
    //                                 </Dropdown.Trigger>

    //                                 <Dropdown.Content>
    //                                     <Dropdown.Link
    //                                         href={route("profile.edit")}
    //                                     >
    //                                         Profile
    //                                     </Dropdown.Link>
    //                                     <Dropdown.Link
    //                                         href={route("logout")}
    //                                         method="post"
    //                                         as="button"
    //                                     >
    //                                         Log Out
    //                                     </Dropdown.Link>
    //                                 </Dropdown.Content>
    //                             </Dropdown>
    //                         </div>
    //                     </div>

    //                     <div className="-me-2 flex items-center sm:hidden">
    //                         <button
    //                             onClick={() =>
    //                                 setShowingNavigationDropdown(
    //                                     (previousState) => !previousState
    //                                 )
    //                             }
    //                             className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
    //                         >
    //                             <svg
    //                                 className="h-6 w-6"
    //                                 stroke="currentColor"
    //                                 fill="none"
    //                                 viewBox="0 0 24 24"
    //                             >
    //                                 <path
    //                                     className={
    //                                         !showingNavigationDropdown
    //                                             ? "inline-flex"
    //                                             : "hidden"
    //                                     }
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     strokeWidth="2"
    //                                     d="M4 6h16M4 12h16M4 18h16"
    //                                 />
    //                                 <path
    //                                     className={
    //                                         showingNavigationDropdown
    //                                             ? "inline-flex"
    //                                             : "hidden"
    //                                     }
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     strokeWidth="2"
    //                                     d="M6 18L18 6M6 6l12 12"
    //                                 />
    //                             </svg>
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>

    //             <div
    //                 className={
    //                     (showingNavigationDropdown ? "block" : "hidden") +
    //                     " sm:hidden"
    //                 }
    //             >
    //                 <div className="pt-2 pb-3 space-y-1">
    //                     <ResponsiveNavLink
    //                         href={route("admin.dashboard")}
    //                         active={route().current("dashboard")}
    //                     >
    //                         Dashboard
    //                     </ResponsiveNavLink>
    //                 </div>

    //                 <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
    //                     <div className="px-4">
    //                         <div className="font-medium text-base text-gray-800 dark:text-gray-200">
    //                             {user.name}
    //                         </div>
    //                         <div className="font-medium text-sm text-gray-500">
    //                             {user.email}
    //                         </div>
    //                     </div>

    //                     <div className="mt-3 space-y-1">
    //                         <ResponsiveNavLink href={route("profile.edit")}>
    //                             Profile
    //                         </ResponsiveNavLink>
    //                         <ResponsiveNavLink
    //                             method="post"
    //                             href={route("logout")}
    //                             as="button"
    //                         >
    //                             Log Out
    //                         </ResponsiveNavLink>
    //                     </div>
    //                 </div>
    //             </div>
    //         </nav>

    //         {header && (
    //             <header className="bg-white dark:bg-gray-800 shadow">
    //                 <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
    //                     {header}
    //                 </div>
    //             </header>
    //         )}

    //         <main>{children}</main>
    //     </div>
    // );

    return (
        <>
            <Sidebar />

            <div
                className="relative flex flex-col flex-1 xl:ps-[280px] xl:[&.expanded]:ps-[80px] !transition-all !duration-[0.2s] ease-linear delay-[0s] bg-normalBG dark:bg-main-dark"
                id="content"
            >
                <header className="sticky top-0 flex w-full bg-white drop-shadow-1 dark:bg-box-dark dark:drop-shadow-none min-h-[70px]">
                    <div className="flex flex-1 nav-wrap md:ps-[20px] ps-[30px] pe-[30px]  bg-white dark:bg-box-dark">
                        <ul className="flex items-center mb-0 list-none nav-left ps-0 gap-x-[14px] gap-y-[9px]">
                            <li>
                                <a
                                    className="flex items-center justify-center sm:min-w-[40px] sm:w-[40px] sm:h-[40px] min-w-[34px] h-[34px] rounded-full bg-transparent hover:bg-primary/10 hover:text-primary dark:hover:text-title-dark dark:hover:bg-box-dark-up group transition duration-200 ease-in-out text-[#525768] dark:text-subtitle-dark max-md:dark:hover:bg-box-dark-up sm:text-[20px] text-[19px] cursor-pointer xl:[&.hide]:hidden max-md:bg-normalBG max-md:dark:bg-box-dark-up max-md:dark:hover:text-subtitle-dark"
                                    id="slim-toggler"
                                >
                                    <i className="uil uil-align-center-alt text-current [&.is-folded]:hidden flex items-center"></i>
                                </a>
                            </li>
                        </ul>

                        <div
                            className="relative ps-[30px] hexadash-top-menu hidden xl:[&.flex]:flex"
                            id="topMenuWrapper"
                        >
                            <ul className="flex flex-wrap items-center gap-y-[15px] gap-x-[34px]">
                                <li className="has-subMenu">
                                    <a href="#" className="active">
                                        Dashboard
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center ms-auto py-[15px] sm:gap-x-[25px] max-sm:gap-x-[15px] gap-y-[15px] relative">
                            <button
                                type="button"
                                className="flex xl:hidden items-center text-[22px] text-[#a0a0a0] dark:text-subtitle-dark min-h-[40px]"
                                id="author-dropdown"
                            >
                                <i className="uil uil-ellipsis-v text-[18px]"></i>
                            </button>
                            <ul
                                id="right-ellipsis-trigger"
                                className="xl:flex hidden items-center justify-end flex-auto mb-0 list-none ps-0 sm:gap-x-[25px] max-sm:gap-x-[15px] gap-y-[15px] max-xl:absolute max-xl:z-[1000] max-xl:m-0 max-xl:rounded-lg max-xl:border-none max-xl:bg-white max-xl:bg-clip-padding max-xl:text-left max-xl:shadow-lg max-xl:dark:bg-neutral-700 max-xl:[&.active]:flex max-xl:end-0 max-xl:px-[20px] max-sm:px-[15px] max-xl:py-[10px] max-xl:top-[70px]"
                            >
                                <li>
                                    <div
                                        className="relative"
                                        data-te-dropdown-ref
                                    >
                                        <button
                                            type="button"
                                            id="author-dropdown"
                                            data-te-dropdown-toggle-ref
                                            aria-expanded="false"
                                            className="flex items-center me-1.5 text-body dark:text-subtitle-dark text-sm font-medium capitalize rounded-full md:me-0 group whitespace-nowrap"
                                        >
                                            <span className="sr-only">
                                                Open user menu
                                            </span>
                                            <img
                                                className="min-w-[32px] w-8 h-8 rounded-full xl:me-2"
                                                src="/images/avatars/thumbs.png"
                                                alt="user photo"
                                            />
                                            <span className="hidden xl:block">
                                                {user.name}
                                            </span>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <main className="bg-normalBG dark:bg-main-dark">
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    );
}
