import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import patika from "../Sidebar/patika.png";
import udemy from "../Sidebar/udemy.svg";
import turkcell from "../Sidebar/turkcell.png";
import { useDarkMode } from "../../contexts/DarkModeContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [setWidth]);

  useEffect(() => {
    if (width > 1100) {
      setIsMenuOpen(false);
    }
  }, [width]);

  const menuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <div className={styles.name}>Alperen Kurşun</div>
        <div className={styles.portfolioName}>Portfolio Page</div>
      </div>

      <div className={styles.right}>
        <FontAwesomeIcon
          icon={faBars}
          className={styles.menu}
          onClick={menuClick}
          style={{
            transform: isMenuOpen ? "rotate(90deg)" : "rotate(180deg)",
            color: isMenuOpen ? "red" : "white",
          }}
        />
        <div
          className={`${styles.menuContent} ${
            isMenuOpen ? styles.menuContentOpen : ""
          }`}
        >
          <div className={styles.menuContentInner}>
            <div className={styles.nav1}></div>
            <div className={styles.nav}>About</div>{" "}
            <div className={styles.nav}>Skills</div>{" "}
            <div className={styles.nav}>Portfolio</div>{" "}
            <div className={styles.nav}>Contact Me</div>
            <div className={styles.navsocial}>
              <FontAwesomeIcon icon={faGithub} className={styles.icongithub} />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className={styles.iconlinkedin}
              />
              <img src={patika} alt="patika" className={styles.icon} />
              <img src={udemy} alt="patika" className={styles.icon} />
              <img src={turkcell} alt="patika" className={styles.icon} />
            </div>
            <div className={styles.nav}>
              <div
                className={`${styles.mode2} ${
                  isDarkMode ? styles.modeRight2 : styles.modeLeft2
                }`}
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                }}
              >
                <div
                  className={`${styles.modeInner} ${
                    isDarkMode ? styles.modeInnerRight : styles.modeInnerLeft
                  }`}
                ></div>
              </div>
            </div>
          </div>
        </div>
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
        <div
          className={`${styles.mode} ${
            isDarkMode ? styles.modeRight : styles.modeLeft
          }`}
          onClick={() => {
            setIsDarkMode(!isDarkMode);
          }}
        >
          <div
            className={`${styles.modeInner} ${
              isDarkMode ? styles.modeInnerRight : styles.modeInnerLeft
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
