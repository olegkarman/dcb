import { Spacer } from "../Spacer/Spacer";
import { Divider } from "../Divider/Divider";
import styles from "./Footer.module.css";

export const Footer = () => (
        <div className={styles.footerWrapper}>
            <div className={styles.contactsInfoWrapper}>
                <div className={styles.infoBox}>
                    <p className={styles.infoHeader}>SEVIL APPS</p>
                    <p>38-099-RA-ND-OM!</p>
                    <p>Ukraine</p>
                    <p>Random street 15/51</p>
                    <p>sEvil.apps@gmail.com</p>
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.infoHeader}>Contacts</p>
                    <p>sEvil.apps@gmail.com</p>
                </div>

                <div className={styles.infoBox}>
                    <p className={styles.infoHeader}>Collaboration</p>
                    <p>sEvil.apps@gmail.com</p>
                </div>
            </div>

            <Spacer size={16} />

            <Divider />

            <Spacer size={16} />

            <p>
                ©2020 sEvil Apps | All rights reserved | Privacy
            </p>
        </div>
);