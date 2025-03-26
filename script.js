const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });


    document.addEventListener('DOMContentLoaded', () => {
      const overlay = document.getElementById('overlay');
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 2000); // Match with CSS animation duration
    });
    