document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = target.offsetTop;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      });
    });
  });