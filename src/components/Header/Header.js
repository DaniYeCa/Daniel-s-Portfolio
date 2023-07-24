import './Header.css'

export const Header = () => {
    return `
  <article class="article-header">

      
      <img class="logo" id="logolink" src="./assets/logo.png" alt="logo" />
      <button id="themeBtn"><img src="./assets/dark-mode-2.png" alt="logo-dark-mode" id="logo-moon-sun"/></button>
  
      
      <section class="header-navbar">
          <label class="nav-label" for="hamburger">
              <img class="menu" src="./assets/menu-hamburguer.png" alt="icon-hamburguer" />
          </label>
          
          <input class="nav-input" type="checkbox" id="hamburger" />

          <nav class="navbar">
                  <ul class="nav-list">
                      <li><a href="#" id="homelink">Inicio</a></li>
                      <li><a href="#" id="aboutmelink">Sobre mí</a></li>
                      <li><a href="#" id="projectlink">Proyectos</a></li>
                  </ul>
          </nav>

          
      </section>     

  </article>

  `;
};


