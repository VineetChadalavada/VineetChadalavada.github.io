// Smooth section fade-in on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".content, #hero");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach(sec => observer.observe(sec));

  // Highlight active link while scrolling
  const navLinks = document.querySelectorAll("#hero .links a");
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("section").forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});
