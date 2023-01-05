import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faReact,
  faSass,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.css";
import jquery from "../Skills/jquery.png";
import chakra from "../Skills/chakra.png";
import HtmlCss from "./HtmlCss";
import { useDarkMode } from "../../contexts/DarkModeContext";

function Portfolio() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${styles.portfolio} ${
        isDarkMode ? styles.portfolioDark : styles.portfolioLight
      }`}
    >
      <div
        className={`${styles.portfolioHeader} ${
          isDarkMode ? styles.portfolioHeaderDark : styles.portfolioHeaderLight
        }`}
      >
        PORTFOLIO
      </div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.icon}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "rgb(37,75,221)" }}
            className={styles.icon}
          />
          <FontAwesomeIcon
            icon={faSass}
            style={{ color: "rgb(199,100,148)" }}
            className={styles.icon}
          />
          <FontAwesomeIcon
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.icon}
          />
        </div>
        <div className={styles.project}>
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.icon}
          />
        </div>
        <div className={styles.project}>
          <img
            src={jquery}
            alt="jquery"
            style={{ width: "40px", height: "35px" }}
            className={styles.icon}
          />
        </div>
        <div className={styles.project}>
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "rgb(94,211,243)" }}
            className={styles.icon}
          />
          <img
            src={chakra}
            alt="jquery"
            style={{
              width: "40px",
              height: "35px",
              borderRadius: "100%",
            }}
            className={styles.icon}
          />
        </div>
      </div>
      <HtmlCss />
    </div>
  );
}

export default Portfolio;
