import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faNode,
  faReact,
  faSass,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useDarkMode } from "../../contexts/DarkModeContext";
import jqueryui from "../Portfolio/images/jqueryui.webp";
import jquery from "../Skills/jquery.webp";
import chakraa from "../Skills/chakra.webp";
import tailwind from "../Portfolio/images/tailwind.webp";
import redux from "../Portfolio/redux.webp";
import mongodb from "../Portfolio/images/mongodb.webp";
import graphql from "../Portfolio/graphql.webp";

function ProjectCard({
  img,
  isResponsive,
  title,
  html,
  css,
  bootstrap,
  sass,
  js,
  jqueryy,
  jqueryyui,
  tailwindd,
  react,
  reduxx,
  chakra,
  node,
  mongo,
  graphqll,
  isCodeBtn,
  isSeeBtn,
  isMobile,
}) {
  const { isDarkMode } = useDarkMode();
  console.log(isMobile);
  return (
    <div className={styles.project}>
      {isResponsive && <div className={styles.responsive}>Responsive</div>}
      <img
        src={img}
        alt="projectimg"
        className={`${styles.projectImg} ${isMobile ? styles.mobileImg : ""}`}
      />
      <div
        className={`${styles.projectName} ${
          isDarkMode ? styles.projectNameDark : styles.projectNameLight
        }`}
      >
        {title}
      </div>
      <div className={styles.projectTechs}>
        Technologies:{" "}
        {html && (
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
        )}
        {css && (
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "rgb(37,75,221)" }}
            className={styles.tech}
          />
        )}
        {bootstrap && (
          <FontAwesomeIcon
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
        )}
        {sass && (
          <FontAwesomeIcon
            icon={faSass}
            style={{ color: "rgb(199,100,148)" }}
            className={styles.tech}
          />
        )}
        {js && (
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
        )}
        {jqueryy && (
          <img
            src={jquery}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
        )}
        {jqueryyui && (
          <img
            src={jqueryui}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
        )}
        {tailwindd && (
          <img
            src={tailwind}
            alt="tailwind"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
        )}
        {react && (
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "rgb(94,211,243)" }}
            className={styles.tech}
          />
        )}
        {reduxx && (
          <img
            src={redux}
            alt="chajkra"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
        )}
        {graphqll && (
          <img
            src={graphql}
            alt="graphql"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
        )}
        {chakra && (
          <img
            src={chakraa}
            alt="chajkra"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
        )}
        {node && (
          <FontAwesomeIcon
            icon={faNode}
            style={{ color: "rgb(114,169,96)" }}
            className={styles.tech}
          />
        )}
        {mongo && (
          <img
            src={mongodb}
            alt="jquery"
            style={{ width: "40px", height: "35px" }}
            className={styles.tech}
          />
        )}
      </div>
      <div
        className={`${styles.projectButtons} ${
          isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
        }`}
      >
        {isCodeBtn.isThere ? (
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href={isCodeBtn.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </a>
        ) : (
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            aria-disabled
            style={{
              backgroundColor: "rgb(153, 153, 153)",
              cursor: "context-menu",
              opacity: 1,
            }}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
        )}

        {isSeeBtn.isThere ? (
          <a
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
            href={isSeeBtn.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        ) : (
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
            style={{
              backgroundColor: "#999999",
              cursor: "context-menu",
              opacity: "1",
            }}
            // href=""
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
