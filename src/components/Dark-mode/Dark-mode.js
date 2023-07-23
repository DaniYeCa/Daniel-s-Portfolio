export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  const changeLogoDarkMode = document.getElementById("logo-moon-sun");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    document.body.classList.value === "light" ?
      changeLogoDarkMode.src = "./public/icons/ligth-mode-2.png" :
      changeLogoDarkMode.src = "./public/icons/dark-mode-2.png";

  });
};