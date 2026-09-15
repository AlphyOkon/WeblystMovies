// Simple scroll-based navbar highlight
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY;
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
/* ========================= */
/* SCROLL BUTTON */
/* ========================= */
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const scrollBottomBtn = document.getElementById("scrollBottomBtn");

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  scrollBottomBtn.addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });


/* ========================= */
/* USER MENU DROPDOWN */
/* ========================= */
const userIcon = document.querySelector(".user-icon");
const userDropdown = document.querySelector(".user-dropdown");

if (userIcon) {
  userIcon.addEventListener("click", () => {
    userDropdown.classList.toggle("active");
  });
}

/* Close dropdown when clicking outside */
document.addEventListener("click", (e) => {
  if (!userIcon.contains(e.target) && !userDropdown.contains(e.target)) {
    userDropdown.classList.remove("active");
  }
});

/* ========================= */
/* SIDEBAR MENU */
/* ========================= */
const menuToggle = document.getElementById("menuToggle");
const sidebarMenu = document.getElementById("sidebarMenu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    sidebarMenu.classList.toggle("active");
  });
}

/* Close sidebar when clicking outside */
document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !sidebarMenu.contains(e.target)) {
    sidebarMenu.classList.remove("active");
  }
});

/* ========================= */
/* LOGOUT BUTTON */
/* ========================= */
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    alert("You have been logged out.");
    window.location.href = "login.html";
  });
}

/* Login Dropdown */
const userMenu = document.querySelector(".user-menu");
const userMenuBtn = document.querySelector(".user-menu-btn");

userMenuBtn.addEventListener("click", () => {
  userMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!userMenu.contains(e.target)) {
    userMenu.classList.remove("active");
  }
});

