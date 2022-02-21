import styles from "./Row.module.css";
import classNames from "classnames";

export const Row = ({
    children,
    className = "",
}) => (
    <div className={classNames({
        [styles.rowWrapper]: true,
        [className]: true
    })}>
        {children}
    </div>
);
