document.addEventListener('DOMContentLoaded', () => {
  const skillsSection = document.querySelector('.Skills-Section');
  const progressBars = document.querySelectorAll('.progress');

  // Store each bar's final width and reset to 0
  progressBars.forEach(bar => {
    const finalWidth = bar.style.width;
    bar.setAttribute('data-width', finalWidth);
    bar.style.width = '0';
  });

  // Animate bars when section is in view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        progressBars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width');
          bar.style.width = targetWidth;
        });

        // Stop observing after animation triggers once
        observer.unobserve(skillsSection);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(skillsSection);
});