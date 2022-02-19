import styles from './Navbar.module.css';
import { Link } from "../Buttons/Link";
import BurgerIcon from "../../assets/burger.svg";
import { useState } from "react";
import { Button } from "../Buttons/Button";
import { Sidebar } from "../Sidebar/Sidebar";
import { Icon } from "../Icon/Icon";
import DCBIcon from "../../assets/dcb.svg";

export const Navbar = () => {
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const changeSidebarState = () => setSideBarOpen(!isSideBarOpen);

    return (
        <>
            <div
                className={styles.navigationStyles}
            >
                {window.innerWidth > 755 ? (
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
                            <Link link="/" text="Home" />
                            <Link link="/advertisement" text="Advertisements" />
                            <Link link="/about" text="About" />
                        </div>

                        <div className={styles.linksWrapper}>
                            <Link link="/login" text="Login" />
                            <Link
                                link="/register"
                                type="button"
                                text="Sign up"
                                upperCased={false}
                            />
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