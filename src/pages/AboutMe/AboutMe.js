import "./AboutMe.css";

import { infoPersonal } from "../../utils/Personal-information";
import { cardPersonal } from "../../../src/components/Card-personal/Card-personal";

export const AboutMe = () => {
  const main = document.querySelector("main");

  main.innerHTML = `
    <section class="container">
        <h4>Conoce un poco sobre mí</h4>
        <article class="main-personal">
            ${infoPersonal.map((el) => cardPersonal(el.photo, el.alt, el.desc)).join("")}
        </article>
    </section>
    `

}