import { Link as RouterLink } from "react-router-dom";
import styles from "./Buttons.module.css";
import classNames from "classnames";

export const Link = ({
    text,
    link,
    type = "link",
    buttonType = "primary",
    upperCased = true,
}) => {
    if (type === "link") {
        return (
            <RouterLink
                to={link}
                className={styles.linkStyles}
            >{text}</RouterLink>
        );
    } else {
        return (
            <RouterLink
                to={link}
                className={classNames({
                    [styles.buttonStyles]: true,
                    [styles.upperCased]: upperCased,
                    [styles.primaryButton]: buttonType === "primary",
                    [styles.secondaryButton]: buttonType === "secondary"
                })}
            >{text}</RouterLink>
        );
    }
}