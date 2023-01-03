import React from "react";
import styles from "./styles.module.css";
import project from "../project.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import chakra from "../../Skills/chakra.png";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useDarkMode } from "../../../contexts/DarkModeContext";

function HtmlCss() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${styles.projects} ${
        isDarkMode ? styles.projectsDark : styles.projectsLight
      }`}
    >
      <div className={styles.project}>
        <img src={project} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <img
            src={chakra}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />{" "}
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <img src={project} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <img
            src={chakra}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />{" "}
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        </div>
      </div>{" "}
      <div className={styles.project}>
        <img src={project} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <img
            src={chakra}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />{" "}
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <img src={project} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <img
            src={chakra}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />{" "}
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <img src={project} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <img
            src={chakra}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />{" "}
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <img src={project} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <img
            src={chakra}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />{" "}
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        </div>
      </div>
      <div className={styles.project}>
        <img src={project} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <img
            src={chakra}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />{" "}
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        </div>
      </div>{" "}
      <div className={styles.project}>
        <img src={project} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <img
            src={chakra}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />{" "}
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        </div>
      </div>{" "}
      <div className={styles.project}>
        <img src={project} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Portfolio
        </div>
        <div className={styles.projectTechs}>
          Technologies:{" "}
          <FontAwesomeIcon
            icon={faHtml5}
            style={{ color: "rgb(228,77,38)" }}
            className={styles.tech}
          />
          <img
            src={chakra}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />{" "}
        </div>
        <div
          className={`${styles.projectButtons} ${
            isDarkMode ? styles.projectButtonsDark : styles.projectButtonsLight
          }`}
        >
          <div
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
          >
            <FontAwesomeIcon icon={faCode} className={styles.tech} /> Code
          </div>
          <div
            className={`${styles.projectButton2} ${
              isDarkMode
                ? styles.projectButton2Dark
                : styles.projectButton2Light
            }`}
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </div>
        </div>
      </div>
    </div>
  );
}

export default HtmlCss;
