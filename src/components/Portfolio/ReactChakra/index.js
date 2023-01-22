import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3Alt,
  faHtml5,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import reacttodo from "../images/reacttodo.png";
import wheather from "../images/wheather.png";
import facebookclone from "../images/facebookclone.png";
import portfolio from "../images/portfolio.png";
import notesapp from "../images/notesapp.png";
import redux from "../redux.webp";

import chakraa from "../../Skills/chakra.png";

function ReactChakra() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${styles.projects} ${
        isDarkMode ? styles.projectsDark : styles.projectsLight
      }`}
    >
      <div className={styles.project}>
        <img src={notesapp} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Notes App
        </div>
        <div className={styles.projectTechs}>
          Technologies:
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "rgb(37,75,221)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "rgb(94,211,243)" }}
            className={styles.tech}
          />
          <img
            src={redux}
            alt="chajkra"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/notes-app-redux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </a>
          <a
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
            href="https://notesappredux.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>
      <div className={styles.project}>
        <div className={styles.responsive}>Responsive</div>
        <img src={portfolio} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio Project
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "rgb(37,75,221)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "rgb(94,211,243)" }}
            className={styles.tech}
          />
          <img
            src={chakraa}
            alt="chajkra"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/portfolio-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </a>
          <a
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
            href="https://alperenkursun.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>
      <div className={styles.project}>
        <img
          src={facebookclone}
          alt="projectimg"
          className={styles.projectImg}
        />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Facebook Clone
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "rgb(37,75,221)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "rgb(94,211,243)" }}
            className={styles.tech}
          />
          <img
            src={chakraa}
            alt="chajkra"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/facebook-clone"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </a>
          <a
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
            href="https://reactfacebookclone.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>
      <div className={styles.project}>
        <img src={wheather} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Wheather App
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faCss3Alt}
            style={{ color: "rgb(37,75,221)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "rgb(94,211,243)" }}
            className={styles.tech}
          />
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </a>
          <a
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
            href="https://reactwheatherapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>
      <div className={styles.project}>
        <img src={reacttodo} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Todo App
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "rgb(94,211,243)" }}
            className={styles.tech}
          />
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/react-todo-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </a>
          <a
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
            href="http://reacttodo1app.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReactChakra;
