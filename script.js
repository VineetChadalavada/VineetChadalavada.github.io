document.addEventListener("DOMContentLoaded", () => {
  // === Fade-in on scroll ===
  const sections = document.querySelectorAll(".content, #hero");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  sections.forEach(section => observer.observe(section));

  // === Smooth scroll for nav links ===
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    });
  });

  // === Scroll-to-top button ===
  const topBtn = document.createElement("button");
  topBtn.id = "scrollTopBtn";
  topBtn.textContent = "↑";
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) topBtn.classList.add("show");
    else topBtn.classList.remove("show");
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Navbar hide on scroll down ===
  let lastScroll = 0;
  const navbar = document.querySelector("nav");
  window.addEventListener("scroll", () => {
    const current = window.pageYOffset;
    if (current > lastScroll && current > 100) {
      navbar.style.top = "-80px";
    } else {
      navbar.style.top = "0";
    }
    lastScroll = current <= 0 ? 0 : current;
  });
});
