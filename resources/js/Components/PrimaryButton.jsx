export default function PrimaryButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `capitalize w-full hover:bg-primary-hbr btn bg-primary text-white hover:text-white text-[14px] font-semibold leading-[22px] inline-flex items-center justify-center rounded-[12px] px-[20px] h-[44px] transition duration-300 ease-in-out ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
