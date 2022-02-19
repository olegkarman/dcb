import styles from "./Divider.module.css";

export const Divider = ({ vertical = false }) => (
  <div className={vertical ? styles.verticalDivider : styles.divider} />
);
