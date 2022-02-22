import AdsImg from "../../assets/advertisement.png";
import PercentageImg from "../../assets/icons/percentage.svg";
import ShieldImg from "../../assets/icons/shield.svg";
import { Spacer } from "../../components/Spacer/Spacer";
import styles from "./HomePage.module.css";
import classnames from "classnames";
import { Link } from "../../components/Buttons/Link";
import { Icon } from "../../components/Icon/Icon";

export const HomePage = () => {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.childWrapper}>
                <Spacer size={64} />

                <h1 className={styles.childStyles}>
                    Create, share and browse advertisements of other people
                </h1>

                <Spacer size={16} />

                <p className={styles.childStyles}>
                    You can find here anything from teapots to telephones.
                    And don't forget that you can chat with other people regarding their adds
                </p>

                <Spacer size={32} />

                <div className={classnames({
                    [styles.buttonsWrapper]: true,
                    [styles.childStyles]: true
                })}>
                    <Link
                        link="/advertisements"
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

                <Spacer size={64} />

                <div className={classnames({
                    [styles.additionalInfo]: true,
                    [styles.childStyles]: true
                })}>
                    <div className={styles.childWrapper}>
                        <Icon
                            src={PercentageImg}
                            alt="Percentage icon"
                            className={styles.additionalIcon}
                        />
                        <p className={styles.additionalText}>
                            There are no installations or monthly fees.
                        </p>
                    </div>

                    <div className={styles.childWrapper}>
                        <Icon
                            src={ShieldImg}
                            alt="Shield icon"
                            className={styles.additionalIcon}
                        />
                        <p className={styles.additionalText}>
                            Everyone in your home can use our app. It is save and easy.
                        </p>
                    </div>
                </div>
            </div>

            <div className={classnames({
                [styles.childWrapper]: true,
                [styles.imageWrapper]: true,
            })}>
                <img src={AdsImg} className={styles.imageStyles} alt="Advertisement" />
            </div>
        </div>
    )
}