import './style.css'

// Add scroll effect to navbar
const navbar = document.querySelector('.navbar');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Simple mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
  const isExpanded = navLinks.style.display === 'flex';
  
  if (isExpanded) {
    navLinks.style.display = 'none';
    navLinks.style.flexDirection = 'row';
    navLinks.style.position = 'static';
    navLinks.style.background = 'transparent';
    navLinks.style.padding = '0';
  } else {
    navLinks.style.display = 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.width = '100%';
    navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
    navLinks.style.padding = '24px';
    navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
  }
});
