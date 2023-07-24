import "./Footer.css";

export const Footer = () => {
  return `
    <section class="contacts background-change">   

        <div class="location"> 
        
            <h3 id="text-location">Murcia, España</h3>
            <button id="locationBtn"><img class="icon-footer" src="./assets/localizacion.png" alt="icon-location" /></button>
       
        </div>

        <div class="email">

            <h3 id="text-email">daniel.dance1912@gmail.com</h3>
            <button id="emailBtn"><img class="icon-footer" src="./assets/mensaje.png" alt="icon-email" /></button>
        
        </div>

    </section> 

    <section class="rrss background-change">
        <button id="rrssBtn"><img src="./assets/rrss.png" alt="icon-rrss" /></button>
        <a href="https://github.com/DaniYeCa" target="_blank" class="icon-rrss" ><img class="icon-footer" src="./assets/github.png" alt="icon-github" /></a>
        <a href="https://www.linkedin.com/in/daniel-yepes-carrillo/" target="_blank" class="icon-rrss"><img class="icon-footer" src="./assets/linkedin.png" alt="icon-linkedin" /></a>
        <a href="./assets/full stack.pdf" target="_blank" class="icon-rrss" ><img class="icon-footer" src="./assets/cv.png" alt="icon-CV" /></a>
    </section>

    <section class="rrss-movil">
        <a href="https://github.com/DaniYeCa" target="_blank"><img src="./assets/github.png" alt="icon-github" /></a>
        <a href="https://www.linkedin.com/in/daniel-yepes-carrillo/" target="_blank"><img src="./assets/linkedin.png" alt="icon-linkedin" /></a>
        <a href="mailto:daniel.dance1912@gmail.com" target="_blank"><img src="./assets/mensaje.png" alt="icon-email" /></a>
    </section>

    <section class="reserved"> 
        <p class="dark-mode">Created by <span class="gradient">Daniel Yepes</span> 2023 at Rock {TheCode}</p>
    </section>
`
}


export const showContent = () => {
  const emailBtn = document.querySelector("#emailBtn");
  const locationBtn = document.querySelector("#locationBtn");

  const textEmail = document.querySelector("#text-email");
  const textLocation = document.querySelector("#text-location");

  const rrssList = document.querySelector(".rrss");
  const rrssBtn = document.querySelector("#rrssBtn");

  emailBtn.addEventListener("click", () => {
    textEmail.classList.toggle("mostrar");
  });

  locationBtn.addEventListener("click", () => {
    textLocation.classList.toggle("mostrar");
  });

  rrssBtn.addEventListener("click", () => {
    rrssList.classList.toggle("show-rrss");
  });
};