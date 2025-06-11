// Scroll animation for general sections
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add("animate-in");
        el.classList.remove("animate-out");
      } else {
        el.classList.remove("animate-in");
        el.classList.add("animate-out");
      }
    });
  },
  {
    threshold: 0.2, // Trigger when 20% of the element is visible
  }
);

// Observe each section with the class .animate-on-scroll
document.querySelectorAll(".animate-on-scroll").forEach((section) => {
  scrollObserver.observe(section);
});

// Skill bar animation
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(".Skills-Section");
  const progressBars = document.querySelectorAll(".progress");

  // Save final widths once
  progressBars.forEach((bar) => {
    const finalWidth = bar.style.width;
    bar.setAttribute("data-width", finalWidth);
    bar.style.width = "0";
  });

  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar) => {
            const targetWidth = bar.getAttribute("data-width");
            bar.style.transition = "none";
            bar.style.width = "0";
            void bar.offsetWidth; // Force reflow
            bar.style.transition = "width 1.5s ease-in-out";
            bar.style.width = targetWidth;
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  if (skillsSection) {
    skillsObserver.observe(skillsSection);
  }

  // Fullscreen menu functionality
  const menuBtn = document.querySelector(".hmb-btn");
  const fullscreenMenu = document.getElementById("fullscreenMenu");
  const closeBtn = document.getElementById("closeMenuBtn");
  const menuLinks = document.querySelectorAll(".menu-items a");

  if (menuBtn && fullscreenMenu && closeBtn) {
    // Open menu
    menuBtn.addEventListener("click", () => {
      fullscreenMenu.classList.add("active");
    });

    // Close menu
    closeBtn.addEventListener("click", () => {
      fullscreenMenu.classList.remove("active");
    });

    // Close menu when link is clicked and scroll smoothly
    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
        fullscreenMenu.classList.remove("active");
      });
    });
  }
});
