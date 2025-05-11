const modeBtn = document.getElementById("mode");
const body = document.querySelector("body");
modeBtn.addEventListener("click", (e) => {
  body.classList.toggle("dark");
});
