import { Link as RouterLink } from "react-router-dom";
import styles from "./Buttons.module.css";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";

export const Link = ({
    text,
    link,
    type = "link",
    buttonType = "primary",
    upperCased = true,
    iconUrl,
    alt = ""
}) => {
    if (type === "link") {
        return (
            <RouterLink
                to={link}
                className={styles.linkStyles}
            >{iconUrl && (
                <Icon
                    src={iconUrl}
                    alt={alt}
                />
            )}{text}</RouterLink>
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
            >{iconUrl && (
                <Icon
                    src={iconUrl}
                    alt={alt}
                />
            )}{text}</RouterLink>
        );
    }
}