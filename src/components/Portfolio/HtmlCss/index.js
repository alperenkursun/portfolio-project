import React from "react";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3Alt,
  faHtml5,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import fullscreenlanding from "../images/fullscreenlanding.png";
import restaurantwebsite from "../images/restaurantwebsite.png";
import parallaxwebsite from "../images/parallaxwebsite.png";
import goodvibesform from "../images/goodvibesform.png";
import landingpage from "../images/landingpage.png";
import bandclone from "../images/bandclone.png";
import gournet from "../images/gournet.png";
import architect from "../images/architect.png";
import parallax2 from "../images/parallax2.png";
import ecommerce from "../images/ecommerce.png";
import realestate from "../images/realestate.png";
import personaltraining from "../images/personaltraining.png";
import electrician from "../images/electrician.png";

function HtmlCss() {
  const { isDarkMode } = useDarkMode();
  return (
    <div
      className={`${styles.projects} ${
        isDarkMode ? styles.projectsDark : styles.projectsLight
      }`}
    >
      <div className={styles.project}>
        <div className={styles.responsive}>Responsive</div>
        <img src={electrician} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Electrician Project
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
            href="https://github.com/alperenkursun/electrician-project"
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
            href="http://asilelektrikakcay.com/"
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
          src={personaltraining}
          alt="projectimg"
          className={styles.projectImg}
        />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Personal Trainer Project
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
            href="https://github.com/alperenkursun/personal-trainer-project"
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
            href="https://adamsteel.surge.sh/"
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
        <img src={realestate} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Real Estate Project
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
            href="https://github.com/alperenkursun/real-estate-project"
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
            href="https://wantedrealestate.surge.sh/"
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
        <img src={ecommerce} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          e-Commerce Project
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
            href="https://github.com/alperenkursun/e-commerce-project"
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
            href="https://e-economic.surge.sh/"
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
        <img src={parallax2} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Parallax2 Website Clone
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
            icon={faSass}
            style={{ color: "rgb(199,100,148)" }}
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
            href="https://github.com/alperenkursun/parallax2-website-clone"
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
            href="https://parallax2clone.surge.sh/"
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
        <img src={architect} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Architect Website Clone
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
            icon={faSass}
            style={{ color: "rgb(199,100,148)" }}
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
            href="https://github.com/alperenkursun/architect-website-clone"
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
            href="https://architectclone.surge.sh/"
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
        <img src={gournet} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Gournet Website Clone
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
            icon={faSass}
            style={{ color: "rgb(199,100,148)" }}
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
            href="https://github.com/alperenkursun/gournet-website-clone"
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
            href="https://gournetclone.surge.sh/"
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
        <img src={bandclone} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Band Website Clone
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
            icon={faSass}
            style={{ color: "rgb(199,100,148)" }}
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
            href="https://github.com/alperenkursun/band-website-clone"
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
            href="https://bandclone.surge.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEye} className={styles.tech} /> See The
            Project
          </a>
        </div>
      </div>
      <div className={styles.project}>
        <img src={landingpage} alt="projectimg" className={styles.projectImg} />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Landing Page Clone
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
            href="https://github.com/alperenkursun/landing-page-clone"
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
            href="https://landingpageclone.surge.sh/"
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
          src={goodvibesform}
          alt="projectimg"
          className={styles.projectImg}
        />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Good Vibes Form Clone
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
            href="https://github.com/alperenkursun/good-vibes-form-clone"
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
            href="https://goodvibesformclone.surge.sh/"
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
          src={parallaxwebsite}
          alt="projectimg"
          className={styles.projectImg}
        />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Parallax Website Clone
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
            href="https://github.com/alperenkursun/parallax-website-clone"
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
            href="https://parallaxsiteclone.surge.sh/"
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
          src={restaurantwebsite}
          alt="projectimg"
          className={styles.projectImg}
        />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Restaurant Website Clone
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
            href="https://github.com/alperenkursun/restaurant-website-clone"
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
            href="https://restaurantwebsiteclone.surge.sh/"
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
          src={fullscreenlanding}
          alt="projectimg"
          className={styles.projectImg}
        />
        <div
          className={`${styles.projectName} ${
            isDarkMode ? styles.projectNameDark : styles.projectNameLight
          }`}
        >
          Full Screen Landing Clone
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
            href="https://github.com/alperenkursun/full-screen-landing-clone"
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
            href="http://fullscreenlandingclone.surge.sh/"
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

export default HtmlCss;
