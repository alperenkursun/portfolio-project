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

function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.skillsHeader}>SKILLS</div>
      <div className={styles.skillsMain}>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#663399"
            percent={95}
            round
            speed={300}
            fontColor="#444444"
            fontSize="1.5rem"
            size={250}
          />
          <div className={styles.skill}>
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ color: "rgb(228,77,38)" }}
            />{" "}
            HTML
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#663399"
            percent={90}
            round
            speed={300}
            fontColor="#444444"
            fontSize="1.5rem"
            size={250}
          />
          <div className={styles.skill}>
            <FontAwesomeIcon
              icon={faCss3Alt}
              style={{ color: "rgb(37,75,221)" }}
            />{" "}
            CSS
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#663399"
            percent={85}
            round
            speed={300}
            fontColor="#444444"
            size={250}
          />
          <div className={styles.skill}>
            <FontAwesomeIcon
              icon={faSass}
              style={{ color: "rgb(199,100,148)" }}
            />{" "}
            SASS/SCSS
          </div>
        </div>

        <div className={styles.card}>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#663399"
            percent={95}
            round
            speed={300}
            fontColor="#444444"
            fontSize="1.5rem"
            size={250}
          />
          <div className={styles.skill}>
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
            colorCircle="#e6e6e6"
            colorSlice="#663399"
            percent={85}
            round
            speed={300}
            fontColor="#444444"
            fontSize="1.5rem"
            size={250}
          />
          <div className={styles.skill}>
            <FontAwesomeIcon
              icon={faSquareJs}
              style={{ color: "rgb(226,196,48)" }}
            />{" "}
            JAVASCRIPT
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#663399"
            percent={80}
            round
            speed={300}
            fontColor="#444444"
            fontSize="1.5rem"
            size={250}
          />
          <div className={styles.skill}>
            <img
              src={jquery}
              alt="jquery"
              style={{ width: "40px", height: "35px" }}
            />{" "}
            JQUERY
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#663399"
            percent={75}
            round
            speed={300}
            fontColor="#444444"
            fontSize="1.5rem"
            size={250}
          />
          <div className={styles.skill}>
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "rgb(94,211,243)" }}
            />{" "}
            REACT
          </div>
        </div>
        <div className={styles.card}>
          <CircularProgressBar
            colorCircle="#e6e6e6"
            colorSlice="#663399"
            percent={65}
            round
            speed={300}
            fontColor="#444444"
            fontSize="1.5rem"
            size={250}
          />
          <div className={styles.skill}>
            {" "}
            <im5
              src={chakra}
              alt="jquery"
              style={{
                width: "40px",
                height: "35px",
                borderRadius: "100%",
              }}
            />{" "}
            CHAKRA UI
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
