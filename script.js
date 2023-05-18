// Smooth scroll animation when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
      });
    }
  });
  