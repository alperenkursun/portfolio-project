import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import patika from "../Sidebar/patika.webp";
import turkcell from "../Sidebar/turkcell.webp";
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
        <a href="/#" className={styles.name}>
          Alperen Kurşun
        </a>

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
            <a className={styles.nav} href="/#">
              About
            </a>{" "}
            <a className={styles.nav} href="#skills">
              Skills
            </a>{" "}
            <a className={styles.nav} href="#portfolio">
              Portfolio
            </a>{" "}
            <a className={styles.nav} href="#contactme">
              Contact Me
            </a>
            <div className={styles.navsocial}>
              <a
                href="https://github.com/alperenkursun"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.icongithub}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/alperen-kur%C5%9Fun-616b43213/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className={styles.iconlinkedin}
                />
              </a>
              <a
                href="https://academy.patika.dev/tr/@alpk"
                target="_blank"
                rel="noreferrer"
              >
                <img src={patika} alt="patika" className={styles.icon} />
              </a>
              <a
                href="https://gelecegiyazanlar.turkcell.com.tr/kisi/alpkur1230"
                target="_blank"
                rel="noreferrer"
              >
                <img src={turkcell} alt="patika" className={styles.icon} />
              </a>
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
        <AwesomeButton type="danger" className={styles.navButton} href="#">
          About
        </AwesomeButton>
        <AwesomeButton
          type="danger"
          className={styles.navButton}
          href="#skills"
        >
          Skills
        </AwesomeButton>
        <AwesomeButton
          type="danger"
          className={styles.navButton}
          href="#portfolio"
        >
          Portfolio
        </AwesomeButton>
        <AwesomeButton
          type="danger"
          className={styles.navButton}
          href="#contactme"
        >
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
