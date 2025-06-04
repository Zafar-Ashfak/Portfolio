import React from "react";
import styles from "./ProjectsStyles.module.css";
import easekart from "../../assets/easekart.png";
import bookops from "../../assets/bookops.png";
import dashboard from "../../assets/dashboard.png";
import tindog from "../../assets/dog.png"

import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={easekart}
          link="https://github.com/Zafar-Ashfak/easekart"
          h3="EaseKart"
          p="A eCommerce App"
        />

        <ProjectCard
          src={bookops}
          link="https://github.com/Zafar-Ashfak/bookops"
          h3="BookOps"
          p="Book Store App"
        />

        <ProjectCard
          src={dashboard}
          link="https://github.com/Zafar-Ashfak/admin-dashboard"
          h3="Admin Dashboard"
          p="Admin Dashboard App"
        />

        <ProjectCard
          src={tindog}
          link="https://github.com/Zafar-Ashfak/Tin-Dog"
          h3="TinDog"
          p="Dogs Nearby App"
        />

      </div>
    </section>
  );
}

export default Projects;
