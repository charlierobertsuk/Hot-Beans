document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.content-box a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = target.offsetTop - 50; // Adjusted offset
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
 }); 