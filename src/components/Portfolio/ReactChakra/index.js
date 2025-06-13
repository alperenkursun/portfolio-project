import React from "react";
import { useDarkMode } from "../../../contexts/DarkModeContext";
import styles from "./styles.module.css";
import react_chakra_projects_data from "./react_chakra_projects_data";
import ProjectCard from "../../ProjectCard";

const ReactChakra = () => {
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
          typescript={project.typescript}
          jqueryy={project.jqueryy}
          jqueryyui={project.jqueryyui}
          tailwindd={project.tailwindd}
          react={project.react}
          nextjs={project.nextjs}
          reduxx={project.reduxx}
          chakra={project.chakra}
          node={project.node}
          mongo={project.mongo}
          graphqll={project.graphqll}
          isCodeBtn={project.isCodeBtn}
          isSeeBtn={project.isSeeBtn}
        />
      ))}
    </div>
  );
};

export default React.memo(ReactChakra);
