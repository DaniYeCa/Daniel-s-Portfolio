import './style.css'
import "./src/components/Dark-mode/Dark-mode.css";

// constantes
import { Header } from './src/components/Header/Header'
import { Footer } from './src/components/Footer/Footer'
// paginas
import { Home } from './src/pages/Home/Home'
import { AboutMe } from './src/pages/AboutMe/AboutMe'
import { Projects } from './src/pages/Projects/Projects';
// funcionalidades
import { linkpages } from './src/utils/linkpages'
import { showContent } from "./src/components/Footer/Footer";
import { changeTheme } from "./src/components/Dark-mode/Dark-mode";

document.querySelector('header').innerHTML = Header()
document.querySelector('footer').innerHTML = Footer()

Home();
changeTheme();
showContent();

// ejecucion de links
linkpages('#homelink', Home)
linkpages('#aboutmelink', AboutMe)
linkpages('#projectlink', Projects)
