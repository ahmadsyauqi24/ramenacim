// === SCROLL SPY ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav .menu ul li a");
const menu = document.querySelector("nav .menu");

window.addEventListener("scroll", () => {
  let current = "";
  const scrollYPos = window.scrollY + 200; // offset lebih stabil di HP

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollYPos >= sectionTop && scrollYPos < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// === TOMBOL "SHOP NOW" ===
const shopBtn = document.querySelector(".tbl-hero");
if (shopBtn) {
  shopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#store").scrollIntoView({ behavior: "smooth" });
    navLinks.forEach(link => link.classList.remove("active"));
    document.querySelector('a[href="#store"]').classList.add("active");
  });
}

// === HAMBURGER TOGGLE ===
function toggleMenu() {
  menu.classList.toggle("active");
  const hamburger = document.querySelector(".hamburger");
  hamburger.classList.toggle("open");
}

// === AUTO CLOSE MENU SAAT KLIK LINK ===
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      document.querySelector(".hamburger").classList.remove("open");
    }
  });
});

// efek fade-in saat scroll
const cards = document.querySelectorAll('.product-card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    } else {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
    }
  });
});
