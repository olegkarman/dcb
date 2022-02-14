import { Link as RouterLink } from "react-router-dom";

const linkStyles = {
    padding: "0 16px",
    color: "#282728",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
}

export const Link = ({
    text,
    link,
}) => {
    return (
        <RouterLink
            to={ link }
            style={ linkStyles }
        >{ text }</RouterLink>
    )
}