import React from "react";
import { AwesomeButton } from "react-awesome-button";
import styles from "./styles.module.css";
import patika from "./patika.png";
import udemy from "./udemy.svg";
import turkcell from "./turkcell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../Navbar/styles.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <AwesomeButton type="github" className={styles.awesomeButton}>
        <FontAwesomeIcon icon={faGithub} className={styles.icon} /> Github
      </AwesomeButton>
      <AwesomeButton type="linkedin" className={styles.awesomeButton}>
        <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} /> Linkedln
      </AwesomeButton>
      <AwesomeButton type="primary" className={styles.awesomeButton}>
        <img src={patika} alt="patika" className={styles.icon} /> Patika
      </AwesomeButton>
      <AwesomeButton type="secondary" className={styles.awesomeButton}>
        <img src={udemy} alt="patika" className={styles.icon} />
        Udemy
      </AwesomeButton>
      <AwesomeButton
        type="disabled"
        className={styles.awesomeButton}
        style={{ fontSize: "9px" }}
      >
        <img src={turkcell} alt="patika" className={styles.icon} /> Geleceği
        Yazanlar
      </AwesomeButton>
    </div>
  );
}

export default Sidebar;
