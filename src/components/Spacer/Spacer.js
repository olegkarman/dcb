export const Spacer = ({ size }) => (
    <div
        style={
            size
                ? {
                    width: `${size}px`,
                    height: `${size}px`,
                    flexGrow: 0,
                    flexShrink: 0,
                    display: "flex"
                }
                :
                {
                    flexGrow: 1,
                    flexShrink: 1,
                    display: "flex"
                }
        }
    />
);