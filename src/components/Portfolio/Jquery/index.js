import React from "react";
import styles from "./styles.module.css";
import project from "../project.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import jquery from "../../Skills/jquery.png";
import counter2 from "../images/counter2.png";
import dadjoke from "../images/dadjoke.png";
import darkmode from "../images/darkmode.png";
import numbers from "../images/numbers.png";
import gallery from "../images/gallery.png";
import cocktails from "../images/cocktails.png";
import slider2 from "../images/slider2.png";
import products from "../images/products.png";
import wikipedia from "../images/wikipedia.png";
import filters from "../images/filters.png";
import pagination from "../images/pagination.png";
import randomuser from "../images/randomuser.png";
import stripesubmenus from "../images/stripesubmenus.png";
import comfystore from "../images/comfystore.png";
import battleship from "../images/battleship.png";
import jqueryui from "../images/jqueryui.png";

function Jquery() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${styles.projects} ${
        isDarkMode ? styles.projectsDark : styles.projectsLight
      }`}
    >
      <div className={styles.project}>
        <img src={battleship} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Battleship App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
            alt="jquery"
            className={styles.tech}
            style={{
              borderRadius: "100%",
            }}
          />
          <img
            src={jqueryui}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/battleship-app"
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
            href="https://battleshipapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={comfystore} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Comfy Store App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/comfy-store-app"
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
            href="https://comfystoreapp.surge.sh/"
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
        <img
          src={stripesubmenus}
          alt="projectimg"
          className={styles.projectImg}
        />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Stripe Submenus App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/stripe-submenus-app"
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
            href="https://stripesubmenusapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={randomuser} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Random User App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/random-user-app"
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
            href="https://randomuserapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={pagination} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Pagination App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/pagination-app"
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
            href="https://paginationapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={filters} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Filters App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/filters-app"
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
            href="https://filtersapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={wikipedia} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Wikipedia App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/wikipedia-app"
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
            href="https://wikipediaapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={products} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Products App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/products-app"
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
            href="http://products1app.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={slider2} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Slider App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/slider2-app"
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
            href="http://slider2app.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={cocktails} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Cocktails App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/cocktails-app"
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
            href="http://cocktailsapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={gallery} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Gallery App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/gallery-app"
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
            href="http://gallery1app.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={numbers} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Numbers App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/numbers-app"
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
            href="https://numbersapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={darkmode} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Dark Mode App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/dark-mode-app"
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
            href="https://darkmodeapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={dadjoke} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Dad Jokes App
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
            icon={faBootstrap}
            style={{ color: "rgb(123,17,243)" }}
            className={styles.tech}
          />
          <FontAwesomeIcon
            icon={faSquareJs}
            style={{ color: "rgb(226,196,48)" }}
            className={styles.tech}
          />
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/dad-jokes-app"
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
            href="https://dadjokesapp.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>

      <div className={styles.project}>
        <img src={counter2} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Simple Counter App
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
          <img
            src={jquery}
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
          <a
            className={`${styles.projectButton1} ${
              isDarkMode
                ? styles.projectButton1Dark
                : styles.projectButton1Light
            }`}
            href="https://github.com/alperenkursun/counter-app"
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
            href="https://simplecounter2app.surge.sh/"
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

export default Jquery;
