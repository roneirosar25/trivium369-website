document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const mainContent = document.getElementById("main-content");
  let menuOpen = false;

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    menuOpen = !menuOpen;
    if (menuOpen) {
      mainContent.style.marginTop = mobileMenu.offsetHeight + "px";
    } else {
      mainContent.style.marginTop = "0";
    }
  });

  // Fechar o menu ao redimensionar a tela (para desktop)
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      mobileMenu.classList.add("hidden");
      mainContent.style.marginTop = "0";
      menuOpen = false;
    }
  });

  // Observer para animações de fade-in
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".fade-in-section").forEach((section) => {
    observer.observe(section);
  });
});
