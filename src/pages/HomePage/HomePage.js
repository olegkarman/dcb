import { Box } from "@mui/material";
import AdsImg from "../../assets/advertisement.png";
import { Spacer } from "../../components/Spacer/Spacer";
import { Link } from "react-router-dom";
import {
    buttonStyles,
    buttonsWrapper,
    childStyles,
    childWrapper,
    imageStyles,
    imageWrapper,
    pageWrapper, primaryButton, secondaryButton
} from "./HomePagesStyles";

export const HomePage = () => {
    return (
        <Box sx={pageWrapper}>
            <Box sx={childWrapper}>
                <Spacer size={64} />

                <h1 style={childStyles}>Create, share and browse advertisements of other people</h1>
                <Spacer size={16} />
                <p style={childStyles}>You can find here anything from teapots to telephones.
                    And don't forget that you can chat with other people regarding their adds</p>

                <Spacer size={32} />

                <Box sx={buttonsWrapper}>
                    <Link
                        to="/register"
                        style={{...buttonStyles, ...primaryButton}}
                    >Get started</Link>

                    <Spacer size={16} />

                    <Link
                        to="/about"
                        style={{...buttonStyles, ...secondaryButton}}
                    >Learn more</Link>
                </Box>
            </Box>

            <Box sx={{...childWrapper, ...imageWrapper}}>
                <Spacer size={64} />

                <img src={AdsImg} style={imageStyles} alt="Advertisement" />
            </Box>
        </Box>
    )
}