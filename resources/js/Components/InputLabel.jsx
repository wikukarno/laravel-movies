export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block text-start font-medium text-sm text-white dark:text-gray-300 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
