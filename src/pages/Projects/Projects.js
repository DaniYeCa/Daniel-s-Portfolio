import "./Projects.css";

import { projectsData } from "../../utils/Projects-data";
import { cardProject } from "../../components/Card-projects/Card-projects";

export const Projects = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="container">
        <h4>Proyectos</h4>
        <article class="container-project">
        ${projectsData.map((el) =>
        cardProject(el.img, el.title, el.goal, el.description, el.tech, el.link, el.github)).join("")
        }
        </article>
    </section>
    `
};