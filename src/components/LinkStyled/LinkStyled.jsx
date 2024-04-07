import React from "react";
import styles from "./LinkStyled.modules.css";
const LinkStyled = ({ children }) => {
  return <div className={styles.link_styled}>{children}</div>;
};

export default LinkStyled;
