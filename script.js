// Hamburger Menu Toggle
const menuIcon = document.querySelector('.hamburger');
const navBar = document.querySelector('.navbar');
const sideNav = document.getElementById('side-nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('fa-xmark'); 
  navBar.classList.toggle('active');
  sideNav.classList.toggle('open');
});

// Read More / Read Less Toggle for multiple buttons
document.querySelectorAll('.read-more-btn').forEach(btn => {
  btn.addEventListener('click', function(event) {
    event.preventDefault();

    // Find the closest container holding the about text
    // Adjust this selector based on your HTML structure
    const container = this.closest('.about-container, .services-box, section');

    if (!container) return;

    const shortAbout = container.querySelector('.short-about');
    const moreAbout = container.querySelector('.more-about');

    if (moreAbout.style.display === 'none' || moreAbout.style.display === '') {
      moreAbout.style.display = 'block';
      //shortAbout.style.display = 'none';
      this.textContent = 'Read less';
    } else {
      moreAbout.style.display = 'none';
      shortAbout.style.display = 'block';
      this.textContent = 'Read more';
    }
  });
});

// Scroll spy and sticky header
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`header nav a[href*="${sectionId}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  // Sticky header toggle
  const header = document.querySelector('header');
  header.classList.toggle('sticky', scrollY > 100);

  // Remove hamburger active classes on scroll 
  menuIcon.classList.remove('fa-xmark');
  navBar.classList.remove('active');
  sideNav.classList.remove('open');
};


ScrollReveal({
  distance: '40px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-container', { origin: 'right' });

const typed = new Typed('.multiple-text', {
  strings: ['Frontend Developer', 'Java Developer', 'MERN Stack Developer'],
  typeSpeed: 20,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
});
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  // Toggle icon: moon 🌙 for dark, sun ☀️ for light
  if(document.body.classList.contains('light-mode')) {
    toggleBtn.textContent = '☀️';
  } else {
    toggleBtn.textContent = '🌙';
  }
});
