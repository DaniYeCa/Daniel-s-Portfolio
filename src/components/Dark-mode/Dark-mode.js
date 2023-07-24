export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  const changeLogoDarkMode = document.getElementById("logo-moon-sun");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    document.body.classList.value === "light" ?
      changeLogoDarkMode.src = "./assets/ligth-mode-2.png" :
      changeLogoDarkMode.src = "./assets/dark-mode-2.png";

  });
};