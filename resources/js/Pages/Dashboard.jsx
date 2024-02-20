import Sidebar from "@/Includes/Sidebar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <Sidebar />
            <div className=" mx-[30px] min-h-[calc(100vh-195px)] mb-[30px] ssm:mt-[30px] mt-[15px]">
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12">
                        <div className="leading-[1.8571428571] flex flex-wrap sm:justify-between justify-center items-center ssm:mb-[33px] mb-[18px] max-sm:flex-col gap-x-[15px] gap-y-[5px]">
                            <h4 className="capitalize text-[20px] text-dark dark:text-title-dark font-semibold">
                                home page
                            </h4>
                            <div className="flex flex-wrap justify-center">
                                <nav>
                                    <ol className="flex flex-wrap p-0 mb-0 list-none gap-[8px] max-sm:justify-center">
                                        <li className="inline-flex items-center">
                                            <a
                                                className="text-[14px] font-normal leading-[20px] text-body dark:text-neutral-200 hover:text-primary group"
                                                href="index.html"
                                            >
                                                <i className="uil uil-estate text-light dark:text-white/50 me-[8px] text-[16px] group-hover:text-current"></i>
                                                Dashboard
                                            </a>
                                        </li>

                                        <li
                                            className="inline-flex items-center before:content-[''] before:w-1 before:h-1 before:ltr:float-left rtl:float-right before:bg-light-extra before:me-[7px] before:pe-0 before:rounded-[50%]"
                                            aria-current="page"
                                        >
                                            <span className="text-[14px] font-normal leading-[20px] flex items-center capitalize text-light dark:text-subtitle-dark">
                                                home page
                                            </span>
                                        </li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-10">
                    <div className="w-full">
                        <div className="p-[25px] bg-white dark:bg-box-dark rounded-10 relative text-[15px] text-body dark:text-subtitle-dark leading-6">
                            <div className="flex justify-between">
                                <div className="bg-primary/10 flex h-[58px] items-center justify-center rounded-2xl text-primary w-[58px] order-2">
                                    <div className="flex items-center text-primary text-[30px]">
                                        <i className="uil uil-suitcase"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="mb-0 text-3xl max-lg:text-[26px] max-sm:text-2xl font-semibold leading-normal text-dark dark:text-title-dark">
                                        <span
                                            className="flex items-center countCategories"
                                            data-number="100"
                                        >
                                            <span className="countNumber">
                                                100
                                            </span>

                                            <span>+</span>
                                        </span>
                                    </h4>
                                    <span className="font-normal text-body dark:text-subtitle-dark text-15">
                                        Total Products
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <span className="inline-flex items-center w-full py-[12px] bg-normalBG dark:bg-box-dark-up px-2.5 rounded-lg gap-x-[10px] gap-y-[5px] flex-wrap">
                                    <span className="flex font-medium gap-[2px] items-center text-sm text-success">
                                        <i className="uil uil-arrow-up text-[18px]"></i>{" "}
                                        25.36%{" "}
                                    </span>
                                    <span className="text-sm text-light dark:text-subtitle-dark">
                                        Since last month
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="p-[25px] bg-white dark:bg-box-dark rounded-10 relative text-[15px] text-body dark:text-subtitle-dark leading-6">
                            <div className="flex justify-between">
                                <div className="bg-primary/10 flex h-[58px] items-center justify-center rounded-2xl text-primary w-[58px] order-2">
                                    <div className="flex items-center text-primary text-[30px]">
                                        <i className="uil uil-suitcase"></i>
                                    </div>
                                </div>
                                <div>
                                    <h4 className="mb-0 text-3xl max-lg:text-[26px] max-sm:text-2xl font-semibold leading-normal text-dark dark:text-title-dark">
                                        <span
                                            className="flex items-center countCategories"
                                            data-number="100"
                                        >
                                            <span className="countNumber">
                                                100
                                            </span>

                                            <span>+</span>
                                        </span>
                                    </h4>
                                    <span className="font-normal text-body dark:text-subtitle-dark text-15">
                                        Total Products
                                    </span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <span className="inline-flex items-center w-full py-[12px] bg-normalBG dark:bg-box-dark-up px-2.5 rounded-lg gap-x-[10px] gap-y-[5px] flex-wrap">
                                    <span className="flex font-medium gap-[2px] items-center text-sm text-success">
                                        <i className="uil uil-arrow-up text-[18px]"></i>{" "}
                                        25.36%{" "}
                                    </span>
                                    <span className="text-sm text-light dark:text-subtitle-dark">
                                        Since last month
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
