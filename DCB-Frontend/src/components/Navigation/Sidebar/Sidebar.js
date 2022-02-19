import styles from "./Sidebar.module.css";
import classNames from "classnames";
import { renderLoginLinks, renderMainLinks } from "../linksRenderer";
import DCBIcon from "../../../assets/dcb.svg";
import { Icon } from "../../Icon/Icon";
import { Divider } from "../../Divider/Divider";

export const Sidebar = ({
    isOpen,
    changeState
}) => {
    return (
        <div className={classNames({
            [styles.sidenav]: true,
            [styles.opened]: isOpen
        })}>
            <div className={styles.sidenavTop}>
                <Icon
                    size={24}
                    src={DCBIcon}
                    className={styles.sidenavIcon}
                />
                <p>DCB</p>
                <a
                    className={styles.closeButton}
                    onClick={changeState}
                >&times;</a>
            </div>

            <span className={styles.dividerWrapper}>
                <Divider />
            </span>

            <div className={styles.linksWrapper}>
                {renderMainLinks(true)}
            </div>

            <span className={styles.dividerWrapper}>
                <Divider />
            </span>

            <div className={classNames({
                [styles.loginLinks]: true,
                [styles.linksWrapper]: true
            })}>
                {renderLoginLinks(true)}
            </div>
        </div>
    );
};