document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  const appearOnScroll = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach(el => appearOnScroll.observe(el));
});