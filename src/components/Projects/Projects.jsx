import React from "react";
import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import fitLift from "../../assets/fitlift.png";
import tinDog from "../../assets/dog.png";
import hipsster from "../../assets/hipsster.png";

import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/Zafar-Ashfak/Tin-Dog"
          h3="Viberr"
          p="Streaming App"
        />

        <ProjectCard
          src={freshBurger}
          link="https://github.com/Zafar-Ashfak/Tin-Dog"
          h3="Burger Haven"
          p="Hamburger Restaurant"
        />

        <ProjectCard
          src={fitLift}
          link="https://github.com/Zafar-Ashfak/Tin-Dog"
          h3="Sweat Sync"
          p="Fitness App"
        />

        <ProjectCard
          src={tinDog}
          link="https://github.com/Zafar-Ashfak/Tin-Dog"
          h3="Tin Dog"
          p="Dog Nearby App"
        />

        <ProjectCard
          src={hipsster}
          link="https://github.com/Zafar-Ashfak/Tin-Dog"
          h3="Hipsster Glasses"
          p="Glasses Shop"
        />
      </div>
    </section>
  );
}

export default Projects;
