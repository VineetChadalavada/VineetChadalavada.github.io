// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");

  const appear = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeEls.forEach(el => appear.observe(el));

  // Dark/Light Mode Toggle
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") body.classList.add("light");

  toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const theme = body.classList.contains("light") ? "light" : "dark";
    localStorage.setItem("theme", theme);
    toggle.textContent = theme === "light" ? "☀️" : "🌙";
  });
});
