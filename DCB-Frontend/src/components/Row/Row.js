import styles from "./Row.module.css";

export const Row = ({
    children,
}) => (
    <div className={styles.rowWrapper}>
        {children}
    </div>
)