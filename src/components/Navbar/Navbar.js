import styles from './Navbar.module.css';
import { Link } from "../Buttons/Link";
import BurgerIcon from "../../assets/burger.svg";
import { Button } from "../Buttons/Button";

export const Navbar = () => {
    return (
        <div
            className={styles.navigationStyles}
        >
            {window.innerWidth > 755 ? (
                <div
                    className={styles.linksOuterWrapper}
                >
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
                        onClick={() => {console.log("here")}}
                        icon={BurgerIcon}
                        iconDesc="Burger icon"
                    />
                </div>
            )}
        </div>
    );
}