import Box from '@mui/material/Box';
import { Link } from "react-router-dom";

const navigationStyles = {
    width: "auto",
    height: "60px",
    backgroundColor: "#f2f1f2"
};

const linksWrapper = {
    width: "fit-content",
    margin: "auto",
    lineHeight: "60px"
};

const linkStyles = {
    padding: "0 16px",
    color: "#282728",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s",
};

export const Navbar = () => {
    return (
        <Box
            sx={navigationStyles}
        >
            <Box
                sx={linksWrapper}
            >
                <div>
                    <Link to="/" style={ linkStyles }>Home</Link>
                    <Link to="/advertisement" style={ linkStyles }>
                        Advertisement
                    </Link>
                    <Link to="/about" style={ linkStyles }>
                        About
                    </Link>
                </div>
            </Box>
        </Box>
    );
}