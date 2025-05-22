import React from "react";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import styles from "./styles.module.css";
import node_projects_data from "./node_projects_data";
import ProjectCard from "../../ProjectCard";

const Node = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`${styles.projects} ${
        isDarkMode ? styles.projectsDark : styles.projectsLight
      }`}
    >
      {node_projects_data.map((project) => (
        <ProjectCard
          img={project.img}
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
};

export default React.memo(Node);
