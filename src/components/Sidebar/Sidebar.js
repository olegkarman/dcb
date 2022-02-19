import styles from "./Sidebar.module.css";
import classNames from "classnames";

export const Sidebar = ({
    isOpen,
    changeState
}) => {
    return (
        <div className={classNames({
            [styles.sidenav]: true,
            [styles.opened]: isOpen
        })}>
            <a className={styles.closebtn} onClick={changeState}>&times;</a>
            <a className={styles.links} href="#">About</a>
            <a className={styles.links} href="#">Services</a>
            <a className={styles.links} href="#">Clients</a>
            <a className={styles.links} href="#">Contact</a>
        </div>
    );
};