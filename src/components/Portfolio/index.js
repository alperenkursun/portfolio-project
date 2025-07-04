import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
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
import { useDarkMode } from "../../contexts/DarkModeContext";
import jquery from "../../assets/images/general/jquery.webp";
import chakra from "../../assets/images/general/chakra.webp";
import redux from "../../assets/images/general/redux.webp";
import tailwind from "../../assets/images/general/tailwind.webp";
import mongodb from "../../assets/images/general/mongodb.webp";
import graphql from "../../assets/images/general/graphql.webp";
import styles from "./styles.module.css";
import VanillaJs from "./VanillaJs";
import Jquery from "./Jquery";
import ReactChakra from "./ReactChakra";
import HtmlCss from "./HtmlCss";
import Node from "./Node";

const Portfolio = () => {
  const { isDarkMode } = useDarkMode();
  const [isClick, setIsClick] = useState({
    click1: false,
    click2: false,
    click3: false,
    click4: true,
    click5: false,
  });

  return (
    <div
      id="portfolio"
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
        <Link
          id="firstlink"
          to="/portfolio/htmlcssprojects"
          onClick={() => {
            setIsClick({
              click1: true,
              click2: false,
              click3: false,
              click4: false,
              click5: false,
            });
          }}
        >
          <div
            className={styles.project}
            style={{ backgroundColor: isClick.click1 ? "#bbccdd" : "#eeefff" }}
          >
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
        </Link>
        <Link
          to="/portfolio/jsprojects"
          onClick={() => {
            setIsClick({
              click1: false,
              click2: true,
              click3: false,
              click4: false,
              click5: false,
            });
          }}
        >
          <div
            className={styles.project}
            style={{ backgroundColor: isClick.click2 ? "#bbccdd" : "#eeefff" }}
          >
            <FontAwesomeIcon
              icon={faSquareJs}
              style={{ color: "rgb(226,196,48)" }}
              className={styles.icon}
            />
          </div>
        </Link>
        <Link
          to="/portfolio/jqueryprojects"
          onClick={() => {
            setIsClick({
              click1: false,
              click2: false,
              click3: true,
              click4: false,
              click5: false,
            });
          }}
        >
          <div
            className={styles.project}
            style={{ backgroundColor: isClick.click3 ? "#bbccdd" : "#eeefff" }}
          >
            <img
              src={jquery}
              alt="jquery"
              style={{ width: "40px", height: "35px" }}
              className={styles.icon}
            />
          </div>
        </Link>
        <Link
          to="/portfolio/reactprojects"
          onClick={() => {
            setIsClick({
              click1: false,
              click2: false,
              click3: false,
              click4: true,
              click5: false,
            });
          }}
        >
          <div
            className={styles.project}
            style={{ backgroundColor: isClick.click4 ? "#bbccdd" : "#eeefff" }}
          >
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "rgb(94,211,243)" }}
              className={styles.icon}
            />
            <img
              src={chakra}
              alt="chakra"
              style={{
                width: "40px",
                height: "35px",
                borderRadius: "100%",
              }}
              className={styles.icon}
            />

            <img
              src={redux}
              alt="redux"
              style={{
                width: "40px",
                height: "35px",
                borderRadius: "100%",
              }}
              className={styles.icon}
            />
            <img
              src={tailwind}
              alt="tailwind"
              className={styles.icon}
              style={{
                width: "40px",
                height: "35px",
                borderRadius: "100%",
              }}
            />
            <img
              src={graphql}
              alt="graphql"
              style={{
                width: "40px",
                height: "35px",
                borderRadius: "100%",
              }}
              className={styles.icon}
            />
          </div>
        </Link>
        <Link
          to="/portfolio/nodeprojects"
          onClick={() => {
            setIsClick({
              click1: false,
              click2: false,
              click3: false,
              click4: false,
              click5: true,
            });
          }}
        >
          <div
            className={styles.project}
            style={{ backgroundColor: isClick.click5 ? "#bbccdd" : "#eeefff" }}
          >
            <FontAwesomeIcon
              icon={faNode}
              style={{ color: "rgb(114,169,96)" }}
              className={styles.icon}
            />

            <img
              src={mongodb}
              alt="mongodb"
              style={{ width: "40px", height: "35px" }}
              className={styles.icon}
            />
          </div>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ReactChakra />} />
        <Route path="/portfolio/htmlcssprojects" element={<HtmlCss />} />
        <Route path="/portfolio/jsprojects" element={<VanillaJs />} />
        <Route path="/portfolio/jqueryprojects" element={<Jquery />} />
        <Route path="/portfolio/reactprojects" element={<ReactChakra />} />
        <Route path="/portfolio/nodeprojects" element={<Node />} />
      </Routes>
    </div>
  );
};

export default React.memo(Portfolio);
