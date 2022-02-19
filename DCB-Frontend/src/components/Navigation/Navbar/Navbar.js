import styles from './Navbar.module.css';
import BurgerIcon from "../../../assets/burger.svg";
import { useState } from "react";
import { Button } from "../../Buttons/Button";
import { Sidebar } from "../Sidebar/Sidebar";
import { Icon } from "../../Icon/Icon";
import DCBIcon from "../../../assets/dcb.svg";
import { renderLoginLinks, renderMainLinks } from "../linksRenderer";

export const Navbar = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);
    const [showLinks, setShowLinks] = useState(window.innerWidth > 755);

    const handleScreenResize = () => {
        if (window.innerWidth > 755) {
            setShowLinks(true);
        } else {
            setShowLinks(false);
        }
    }

    useState(() => {
        window.addEventListener('resize', handleScreenResize);

        return () => {
            window.removeEventListener('resize', handleScreenResize);
        }
    }, []);

    const changeSidebarState = () => setSideBarOpen(!isSideBarOpen);

    return (
        <>
            <div
                className={styles.navigationStyles}
            >
                {showLinks ? (
                    <div
                        className={styles.linksOuterWrapper}
                    >
                        <div className={styles.linksWrapper}>
                            <Icon
                                size={58}
                                src={DCBIcon}
                            />
                        </div>

                        <div className={styles.linksWrapper}>
                            {renderMainLinks()}
                        </div>

                        <div className={styles.linksWrapper}>
                            {renderLoginLinks()}
                        </div>
                    </div>
                ) : (
                    <div className={styles.burgerWrapper}>
                        <Button
                            onlyIcon
                            onClick={changeSidebarState}
                            icon={BurgerIcon}
                            iconDesc="Burger icon"
                        />
                    </div>
                )}
            </div>
            <Sidebar
                isOpen={isSideBarOpen}
                changeState={changeSidebarState}
            />
        </>
    );
}