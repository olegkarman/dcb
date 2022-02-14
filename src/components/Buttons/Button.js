import styles from "./Buttons.module.css";
import classNames from "classnames";

export const Button = ({
    text,
    icon,
    iconDesc,
    onlyIcon = false,
    onClick,
    type = "primary"
}) => {
    return onlyIcon ? (
        <button
            onClick={onClick}
            className={classNames({
                [styles.buttonStyles]: type,
                [styles.onlyIconButton]: true
            })}
        >
            <img src={icon} alt={iconDesc} />
        </button>
    ) : (
        <button
            onClick={onClick}
            className={classNames({
                [styles.buttonStyles]: true,
                [styles.buttonWithIcon]: !!icon,
                [styles.primaryButton]: type === "primary",
                [styles.secondaryButton]: type === "secondary"
            })}
        >{text}</button>
    )
};