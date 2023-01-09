import React from "react";
import { AwesomeButton } from "react-awesome-button";
import styles from "./styles.module.css";
import patika from "./patika.png";
import turkcell from "./turkcell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../Navbar/styles.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <a
        href="https://github.com/alperenkursun"
        target="_blank"
        rel="noreferrer"
        className={styles.a}
      >
        <AwesomeButton type="github" className={styles.awesomeButton}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} /> Github
        </AwesomeButton>
      </a>
      <a
        href="https://www.linkedin.com/in/alperen-kur%C5%9Fun-616b43213/"
        target="_blank"
        rel="noreferrer"
      >
        <AwesomeButton type="linkedin" className={styles.awesomeButton}>
          <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />{" "}
          Linkedln
        </AwesomeButton>
      </a>
      <a href="https://app.patika.dev/alpk" target="_blank" rel="noreferrer">
        <AwesomeButton type="primary" className={styles.awesomeButton}>
          <img src={patika} alt="patika" className={styles.icon} /> Patika
        </AwesomeButton>
      </a>

      <a
        href="https://gelecegiyazanlar.turkcell.com.tr/kisi/alpkur1230"
        target="_blank"
        rel="noreferrer"
      >
        <AwesomeButton
          type="disabled"
          className={styles.awesomeButton}
          style={{ fontSize: "9px" }}
        >
          <img src={turkcell} alt="patika" className={styles.icon} /> Geleceği
          Yazanlar
        </AwesomeButton>
      </a>
    </div>
  );
}

export default Sidebar;
