import React from "react";
import styles from "./styles.module.css";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faReact,
  faSass,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import jquery from "./jquery.png";
import chakra from "./chakra.png";
import { useMediaQuery } from "react-responsive";
import { useDarkMode } from "../../contexts/DarkModeContext";

function Skills() {
  const media1522 = useMediaQuery({ query: "(max-width: 1522px)" });
  const media1280 = useMediaQuery({ query: "(max-width: 1280px)" });
  const media1100 = useMediaQuery({ query: "(max-width: 1100px)" });
  const media850 = useMediaQuery({ query: "(max-width: 850px)" });
  const media600 = useMediaQuery({ query: "(max-width: 600px)" });
  const media450 = useMediaQuery({ query: "(max-width: 450px)" });
  const media350 = useMediaQuery({ query: "(max-width: 350px)" });
  const { isDarkMode } = useDarkMode();
  return (
    <div
      id="skills"
      className={`${styles.skills} ${
        isDarkMode ? styles.skillsDark : styles.skillsLight
      }`}
    >
      <div
        className={`${styles.skillsHeader} ${
          isDarkMode ? styles.skillsHeaderDark : styles.skillsHeaderLight
        }`}
      >
        SKILLS
      </div>
      <div className={styles.skillsMain}>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle={isDarkMode ? "#777777" : "#e6e6e6"}
            colorSlice={isDarkMode ? "#ffffff" : "#663399"}
            fontColor={isDarkMode ? "#ffffff" : "#663399"}
            percent={95}
            round
            speed={300}
            fontSize="1.5rem"
            size={
              media350
                ? 45
                : media450
                ? 60
                : media600
                ? 90
                : media850
                ? 120
                : media1100
                ? 200
                : media1280
                ? 230
                : media1522
                ? 200
                : ""
            }
          />
          <div
            className={`${styles.skill} ${
              isDarkMode ? styles.skillDark : styles.skillLight
            }`}
          >
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ color: "rgb(228,77,38)" }}
            />{" "}
            HTML
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle={isDarkMode ? "#777777" : "#e6e6e6"}
            colorSlice={isDarkMode ? "#ffffff" : "#663399"}
            fontColor={isDarkMode ? "#ffffff" : "#663399"}
            percent={90}
            round
            speed={300}
            fontSize="1.5rem"
            size={
              media350
                ? 45
                : media450
                ? 60
                : media600
                ? 90
                : media850
                ? 120
                : media1100
                ? 200
                : media1280
                ? 230
                : media1522
                ? 200
                : ""
            }
          />
          <div
            className={`${styles.skill} ${
              isDarkMode ? styles.skillDark : styles.skillLight
            }`}
          >
            <FontAwesomeIcon
              icon={faCss3Alt}
              style={{ color: "rgb(37,75,221)" }}
            />{" "}
            CSS
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle={isDarkMode ? "#777777" : "#e6e6e6"}
            colorSlice={isDarkMode ? "#ffffff" : "#663399"}
            fontColor={isDarkMode ? "#ffffff" : "#663399"}
            percent={85}
            round
            speed={300}
            size={
              media350
                ? 45
                : media450
                ? 60
                : media600
                ? 90
                : media850
                ? 120
                : media1100
                ? 200
                : media1280
                ? 230
                : media1522
                ? 200
                : ""
            }
          />
          <div
            className={`${styles.skill} ${
              isDarkMode ? styles.skillDark : styles.skillLight
            }`}
          >
            <FontAwesomeIcon
              icon={faSass}
              style={{ color: "rgb(199,100,148)" }}
            />{" "}
            SASS/SCSS
          </div>
        </div>

        <div className={styles.card}>
          <CircularProgressBar
            colorCircle={isDarkMode ? "#777777" : "#e6e6e6"}
            colorSlice={isDarkMode ? "#ffffff" : "#663399"}
            fontColor={isDarkMode ? "#ffffff" : "#663399"}
            percent={95}
            round
            speed={300}
            fontSize="1.5rem"
            size={
              media350
                ? 45
                : media450
                ? 60
                : media600
                ? 90
                : media850
                ? 120
                : media1100
                ? 200
                : media1280
                ? 230
                : media1522
                ? 200
                : ""
            }
          />
          <div
            className={`${styles.skill} ${
              isDarkMode ? styles.skillDark : styles.skillLight
            }`}
          >
            <FontAwesomeIcon
              icon={faBootstrap}
              style={{ color: "rgb(123,17,243)" }}
            />{" "}
            BOOTSTRAP
          </div>
        </div>
      </div>
      <div className={styles.skillsMain}>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle={isDarkMode ? "#777777" : "#e6e6e6"}
            colorSlice={isDarkMode ? "#ffffff" : "#663399"}
            fontColor={isDarkMode ? "#ffffff" : "#663399"}
            percent={85}
            round
            speed={300}
            fontSize="1.5rem"
            size={
              media350
                ? 45
                : media450
                ? 60
                : media600
                ? 90
                : media850
                ? 120
                : media1100
                ? 200
                : media1280
                ? 230
                : media1522
                ? 200
                : ""
            }
          />
          <div
            className={`${styles.skill} ${
              isDarkMode ? styles.skillDark : styles.skillLight
            }`}
          >
            <FontAwesomeIcon
              icon={faSquareJs}
              style={{ color: "rgb(226,196,48)" }}
            />{" "}
            JAVASCRIPT
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle={isDarkMode ? "#777777" : "#e6e6e6"}
            colorSlice={isDarkMode ? "#ffffff" : "#663399"}
            fontColor={isDarkMode ? "#ffffff" : "#663399"}
            percent={80}
            round
            speed={300}
            fontSize="1.5rem"
            size={
              media350
                ? 45
                : media450
                ? 60
                : media600
                ? 90
                : media850
                ? 120
                : media1100
                ? 200
                : media1280
                ? 230
                : media1522
                ? 200
                : ""
            }
          />
          <div
            className={`${styles.skill} ${
              isDarkMode ? styles.skillDark : styles.skillLight
            }`}
          >
            <img
              src={jquery}
              alt="jquery"
              style={
                media350
                  ? { width: "7px", height: "7px" }
                  : media450
                  ? { width: "11px", height: "11px" }
                  : media600
                  ? { width: "14px", height: "14px" }
                  : media850
                  ? { width: "20px", height: "20px" }
                  : media1100
                  ? { width: "26px", height: "26px" }
                  : media1280
                  ? { width: "28px", height: "28px" }
                  : media1522
                  ? { width: "40px", height: "35px" }
                  : { width: "40px", height: "35px" }
              }
            />{" "}
            JQUERY
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle={isDarkMode ? "#777777" : "#e6e6e6"}
            colorSlice={isDarkMode ? "#ffffff" : "#663399"}
            fontColor={isDarkMode ? "#ffffff" : "#663399"}
            percent={75}
            round
            speed={300}
            fontSize="1.5rem"
            size={
              media350
                ? 45
                : media450
                ? 60
                : media600
                ? 90
                : media850
                ? 120
                : media1100
                ? 200
                : media1280
                ? 230
                : media1522
                ? 200
                : ""
            }
          />
          <div
            className={`${styles.skill} ${
              isDarkMode ? styles.skillDark : styles.skillLight
            }`}
          >
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "rgb(94,211,243)" }}
            />{" "}
            REACT
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle={isDarkMode ? "#777777" : "#e6e6e6"}
            colorSlice={isDarkMode ? "#ffffff" : "#663399"}
            fontColor={isDarkMode ? "#ffffff" : "#663399"}
            percent={65}
            round
            speed={300}
            fontSize="1.5rem"
            size={
              media350
                ? 45
                : media450
                ? 60
                : media600
                ? 90
                : media850
                ? 120
                : media1100
                ? 200
                : media1280
                ? 230
                : media1522
                ? 200
                : ""
            }
          />
          <div
            className={`${styles.skill} ${
              isDarkMode ? styles.skillDark : styles.skillLight
            }`}
          >
            <img
              src={chakra}
              alt="jquery"
              style={
                media350
                  ? { width: "7px", height: "7px" }
                  : media450
                  ? { width: "11px", height: "11px" }
                  : media600
                  ? { width: "14px", height: "14px" }
                  : media850
                  ? { width: "20px", height: "20px" }
                  : media1100
                  ? { width: "26px", height: "26px" }
                  : media1280
                  ? { width: "28px", height: "28px" }
                  : media1522
                  ? { width: "40px", height: "35px" }
                  : { width: "40px", height: "35px" }
              }
            />{" "}
            CHAKRA UI
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
