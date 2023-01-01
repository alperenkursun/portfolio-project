import React from "react";
import styles from "./styles.module.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./styles.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.name}>Alperen Kurşun</div>
        <div className={styles.portfolioName}>Portfolio Page</div>
      </div>

      <div className={styles.right}>
        <AwesomeButton type="danger" className={styles.navButton}>
          About
        </AwesomeButton>
        <AwesomeButton type="danger" className={styles.navButton}>
          Skills
        </AwesomeButton>
        <AwesomeButton type="danger" className={styles.navButton}>
          Portfolio
        </AwesomeButton>
        <AwesomeButton type="danger" className={styles.navButton}>
          Contact Me
        </AwesomeButton>
        <div className={styles.mode}>
          <div className={styles.modeInner}></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
