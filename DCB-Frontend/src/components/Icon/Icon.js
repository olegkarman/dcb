export const Icon = ({
    src,
    alt = "",
    size = 24,
    className = "",
    onClick = () => {},
}) => {
    return (
        <img
            onClick={onClick}
            src={src}
            alt={alt}
            className={className}
            style={{
                width: `${size}px`,
                height: `${size}px`
            }} />
    )
};