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
import reacttodo from "../images/reacttodo.webp";
import wheather from "../images/wheather.webp";
import facebookclone from "../images/facebookclone.webp";
import portfolio from "../images/portfolio.webp";
import notesapp from "../images/notesapp.webp";
import redux from "../redux.webp";
import darkcalculator from "../images/darkcalculator.webp";
import korfez from "../images/korfez.webp";
import urunkatalog from "../images/urunkatalog.webp";
import tailwind from "../images/tailwind.webp";
import spendmoneyapp from "../images/spendmoneyapp.webp";

import chakraa from "../../Skills/chakra.webp";

function ReactChakra() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${styles.projects} ${
        isDarkMode ? styles.projectsDark : styles.projectsLight
      }`}
    >
      <div className={styles.project}>
        <img
          src={spendmoneyapp}
          alt="projectimg"
          className={styles.projectImg}
        />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Spend Money App
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
          <img
            src={tailwind}
            alt="tailwind"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
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
            href="https://github.com/alperenkursun/spend-money-app"
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
            href="https://spendmoneyapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={urunkatalog} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Ürün Katalog Projesi
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
          <img
            src={tailwind}
            alt="tailwind"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
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
            href="https://github.com/alperenkursun/urun-katalog-projesi"
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
            href="https://urunkatalogprojesialperenkursun.surge.sh/"
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
        <img src={korfez} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Special Security Website
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
            href="https://github.com/alperenkursun/special-security-website-project"
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
            href="http://korfezozelguvenlik.surge.sh/"
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
          src={darkcalculator}
          alt="projectimg"
          className={styles.projectImg}
        />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Calculator App
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
            href="https://github.com/alperenkursun/calculator-app-react"
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
            href="https://calculatorappreact.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

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
