

// Star and meteor generation
function generateStars() {
  document.querySelectorAll('.star').forEach(el => el.remove());
  const starContainer = document.querySelector('.star-background');
  const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1;
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.animationDuration = (Math.random() * 4 + 2) + 's';
    star.style.opacity = Math.random() * 0.5 + 0.5;
    starContainer.appendChild(star);
  }
}

function generateMeteors() {
  document.querySelectorAll('.meteor').forEach(el => el.remove());
  const starContainer = document.querySelector('.star-background');
  const numberOfMeteors = 4;

  for (let i = 0; i < numberOfMeteors; i++) {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    const size = Math.random() * 3 + 1;
    meteor.style.width = size * 50 + 'px';
    meteor.style.height = size + 'px';
    meteor.style.left = Math.random() * window.innerWidth + 'px';
    meteor.style.top = Math.random() * 0.2 * window.innerHeight + 'px';
    meteor.style.animationDelay = Math.random() * 6 + 's';
    meteor.style.animationDuration = (Math.random() * 3 + 3) + 's';
    starContainer.appendChild(meteor);
  }
}

// Initial generation
generateStars();
generateMeteors();

// Re-generate on resize
window.addEventListener('resize', () => {
  generateStars();
  generateMeteors();
});

// Mobile menu toggle
// Mobile menu toggle
function toggleMobileMenu() {
  const open = document.querySelector('.mobile-menu-icon');
  const menu = document.querySelector('.mobile-menu');
  const isVisible = menu.style.display === "flex";

  if (isVisible) {
    menu.style.display = "none";
    open.style.display = "block";
  } else {
    menu.style.display = "flex";
    open.style.display = "none";
  }
}

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu-link a').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if(target) {
      target.scrollIntoView({ behavior: 'smooth' }); // smooth scroll
    }
    // Close mobile menu
    document.querySelector('.mobile-menu').style.display = 'none';
    document.querySelector('.mobile-menu-icon').style.display = 'block';
  });
});

// Handle window resize
window.addEventListener('resize', () => {
  const open = document.querySelector('.mobile-menu-icon');
  const menu = document.querySelector('.mobile-menu');
  if (window.innerWidth > 768) {
    menu.style.display = "";
    open.style.display = "";
  } else {
    menu.style.display = "none";
    open.style.display = "block";
  }
});




// Scroll reveal for all sections except hero
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    reveals.forEach(reveal => {
      observer.observe(reveal);
    });