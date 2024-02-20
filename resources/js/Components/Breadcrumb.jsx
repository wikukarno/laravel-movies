export default function Breadcrumb({ title }) {
    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12">
                <div className="leading-[1.8571428571] flex flex-wrap sm:justify-between justify-center items-center ssm:mb-[33px] mb-[18px] max-sm:flex-col gap-x-[15px] gap-y-[5px]">
                    <h4 className="capitalize text-[20px] text-dark dark:text-title-dark font-semibold">
                        {title}
                    </h4>
                    <div className="flex flex-wrap justify-center">
                        <nav>
                            <ol className="flex flex-wrap p-0 mb-0 list-none gap-[8px] max-sm:justify-center">
                                <li className="inline-flex items-center">
                                    <a
                                        className="text-[14px] font-normal leading-[20px] text-body dark:text-neutral-200 hover:text-primary group"
                                        href={route("admin.dashboard")}
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
                                        {title}
                                    </span>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
