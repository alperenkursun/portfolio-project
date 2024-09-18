import React from "react";
import styles from "./styles.module.css";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import react_chakra_projects_data from "./react_chakra_projects_data";
import ProjectCard from "../../ProjectCard";

function ReactChakra() {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`${styles.projects} ${
        isDarkMode ? styles.projectsDark : styles.projectsLight
      }`}
    >
      {react_chakra_projects_data.map((project) => (
        <ProjectCard
          img={project.img}
          isMobile={project.isMobile}
          isResponsive={project.isResponsive}
          title={project.title}
          html={project.html}
          css={project.css}
          bootstrap={project.bootstrap}
          sass={project.sass}
          js={project.js}
          jqueryy={project.jqueryy}
          jqueryyui={project.jqueryyui}
          tailwindd={project.tailwindd}
          react={project.react}
          reduxx={project.reduxx}
          chakra={project.chakra}
          node={project.node}
          mongo={project.mongo}
          isCodeBtn={project.isCodeBtn}
          isSeeBtn={project.isSeeBtn}
        />
      ))}
    </div>
  );
}

export default ReactChakra;
