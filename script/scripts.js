const themeButton = document.getElementById("myButton2");

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    themeButton.textContent = "Light Theme";
  } else {
    themeButton.textContent = "Dark Theme";
  }
});
