import AdsImg from "../../assets/advertisement.png";
import { Spacer } from "../../components/Spacer/Spacer";
import styles from "./HomePage.module.css";
import classnames from "classnames";
import { Link } from "../../components/Buttons/Link";

export const HomePage = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.childWrapper}>
                <Spacer size={64} />

                <h1 className={styles.childStyles}>Create, share and browse advertisements of other people</h1>
                <Spacer size={16} />
                <p className={styles.childStyles}>You can find here anything from teapots to telephones.
                    And don't forget that you can chat with other people regarding their adds</p>

                <Spacer size={32} />

                <div className={styles.buttonsWrapper}>
                    <Link
                        link="/register"
                        type="button"
                        text="Get started"
                    />

                    <Spacer size={16} />

                    <Link
                        link="/about"
                        type="button"
                        buttonType="secondary"
                        text="Learn more"
                    />
                </div>
            </div>

            <div className={classnames({
                [styles.childWrapper]: true,
                [styles.imageWrapper]: true,
            })}>
                <Spacer size={64} />

                <img src={AdsImg} className={styles.imageStyles} alt="Advertisement" />
            </div>
        </div>
    )
}