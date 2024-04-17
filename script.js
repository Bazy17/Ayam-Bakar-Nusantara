const nav = document.querySelector("nav ul");

// ketika hamburger menu diclick
document.querySelector(".menu-toggle input").onclick = () => {
  nav.classList.toggle("active");
};

// click diluar hamburger menu untuk menghilangkan nav
const humburger = document.querySelector(".menu-toggle input");

document.addEventListener("click", function (e) {
  if (!humburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});
