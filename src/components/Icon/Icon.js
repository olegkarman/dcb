export const Icon = ({
    src,
    alt = "",
    size = 24,
    className = ""
}) => {
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={{
                width: `${size}px`,
                height: `${size}px`
            }} />
    )
};