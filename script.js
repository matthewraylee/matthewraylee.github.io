
// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
  item.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// Add active class to nav links on scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLi.forEach(li => {
    li.classList.remove('active');
    if (li.getAttribute('href').substring(1) === current) {
      li.classList.add('active');
    }
  });
});

// Smooth scroll for Safari/IE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Add animation to elements when they come into view
const fadeInElements = document.querySelectorAll('section');

const fadeInOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px"
};

const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('fade-in');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, fadeInOptions);

fadeInElements.forEach(element => {
  fadeInObserver.observe(element);
});
