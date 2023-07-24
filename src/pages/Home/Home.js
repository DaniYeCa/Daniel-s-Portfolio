import './Home.css'
import { Avatar } from "../../components/Avatar/Avatar";

export const Home = () => {
    const main = document.querySelector("main");

    main.innerHTML = `
    <section class="home">
    
        <div class="descrip">
            <h1 class="gradient">Daniel Yepes Carrillo</h1>
            <h2 class="dark-mode">Estudiante Full Stack Developer.</h2>
            <p class="dark-mode">Soy una persona muy creativa a la que le encanta aprender nuevas tecnologías y reinventarme.</p>
            
        </div>
        <div class="image">
            ${Avatar("./assets/avatar.jpg", "Avatar Daniel Yepes")}
        </div>
    </section>
    `;
};