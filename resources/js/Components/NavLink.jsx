import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    iconName = "",
    ...props
}) {
    return (
        // <Link
        //     {...props}
        //     className={
        //         'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
        //         (active
        //             ? 'border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 '
        //             : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ') +
        //         className
        //     }
        // >
        //     {children}
        // </Link>

        <Link
            {...props}
            className={
                "group-[.open]:bg-primary/10 rounded-e-[20px] hover:bg-primary/10 focus:bg-primary/10 dark:text-subtitle-dark flex h-12 cursor-pointer items-center gap-[16px] truncate px-6 py-4 text-[14px] font-medium outline-none transition duration-300 ease-linear hover:text-primary capitalize" +
                (active
                    ? "bg-slate-100 text-primary bg-primary/10"
                    : "text-body dark:text-subtitle-dark") +
                className
            }
        >
            <span className={
                "nav-icon text-[18px] dark:text-subtitle-dark text-light-extra group-hover:text-current group-[&.active]:text-current group-focus:text-current " +
                (active
                    ? "text-primary"
                    : "text-body dark:text-subtitle-dark")
            }>
                <i className={iconName}></i>
            </span>
            <span className="capitalize title">{children}</span>
        </Link>
    );
}
