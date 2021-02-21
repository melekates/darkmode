const darkThemeActive = false;
const btnToggleTheme = document.getElementById("btnToggleTheme");

btnToggleTheme.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-theme");
  e.target.value = (darkThemeActive = !darkThemeActive)
    ? "Beyaz temayı aç"
    : "Koyu temayı aç";
});
s