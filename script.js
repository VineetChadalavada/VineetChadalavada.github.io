document.addEventListener("DOMContentLoaded", () => {
  // === Fade-in Animation on Scroll ===
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
    { threshold: 0.2 }
  );
  sections.forEach(section => observer.observe(section));

  // === Highlight Active Section in Navbar ===
  const navLinks = document.querySelectorAll("#hero .links a");
  const sectionsAll = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    let current = "";
    sectionsAll.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) current = section.getAttribute("id");
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // === Smooth Scroll for Nav Links ===
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop - 40,
        behavior: "smooth"
      });
    });
  });

  // === Scroll-To-Top Button ===
  const topBtn = document.createElement("button");
  topBtn.innerHTML = "↑";
  topBtn.id = "scrollTopBtn";
  document.body.appendChild(topBtn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      topBtn.classList.add("show");
    } else {
      topBtn.classList.remove("show");
    }
  });

  topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // === Optional: Subtle Navbar Hide on Scroll ===
  let lastScrollTop = 0;
  const heroLinks = document.querySelector(".links");
  window.addEventListener("scroll", () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop && st > 150) {
      heroLinks.style.opacity = "0";
    } else {
      heroLinks.style.opacity = "1";
    }
    lastScrollTop = st <= 0 ? 0 : st;
  });
});
