import { Link } from "../Buttons/Link";
import HomeIcon from "../../assets/home.svg";
import SearchIcon from "../../assets/search.svg";
import InfoIcon from "../../assets/info.svg";
import LoginIcon from "../../assets/person.svg";

export const renderMainLinks = (withIcons = false) => {
    return (
        <>
            <Link
                link="/"
                text="Home"
                iconUrl={withIcons ? HomeIcon : ""}
            />
            <Link
                link="/advertisement"
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