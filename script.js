// scroll spy
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .menu ul li a");
const menu = document.querySelector("nav .menu");

// scroll event → ubah link aktif otomatis
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) link.classList.add("active");
  });
});

// tombol "Shop Now"
const shopBtn = document.querySelector(".tbl-hero");
shopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("#store").scrollIntoView({ behavior: "smooth" });
  navLinks.forEach(link => link.classList.remove("active"));
  document.querySelector('a[href="#store"]').classList.add("active");
});

// hamburger toggle
function toggleMenu() {
  menu.classList.toggle("active");
}

// auto-close menu saat klik link
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if(menu.classList.contains("active")) menu.classList.remove("active");
  });
});
