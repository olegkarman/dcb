import { Link } from "../Buttons/Link";
import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search.svg";
import InfoIcon from "../../assets/icons/info.svg";
import LoginIcon from "../../assets/icons/person.svg";

export const renderMainLinks = (withIcons = false) => {
    return (
        <>
            <Link
                link="/"
                text="Home"
                iconUrl={withIcons ? HomeIcon : ""}
            />
            <Link
                link="/advertisements"
                text="Advertisements"
                iconUrl={withIcons ? SearchIcon : ""}
            />
            <Link
                link="/about"
                text="About"
                iconUrl={withIcons ? InfoIcon : ""}
            />
        </>
    )
};

export const renderLoginLinks = (withIcons = false) => {
    return (
        <>
            <Link
                link="/login"
                text="Login"
                iconUrl={withIcons ? LoginIcon : ""}
            />
            <Link
                link="/register"
                type="button"
                text="Sign up"
                upperCased={false}
            />
        </>
    )
};