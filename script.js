function toggleMode() {
  document.body.classList.toggle('dark');
}

// Confetti Effect on Load
window.onload = function () {
  const popup = document.getElementById('welcome-popup');
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    popup.appendChild(confetti);
  }
};

// Scroll Reveal Animations
ScrollReveal().reveal('.hero-text', { delay: 100, origin: 'left', distance: '50px' });
ScrollReveal().reveal('#about', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.skills-grid .skill-card', { interval: 100 });
ScrollReveal().reveal('.project-card', { interval: 150 });
ScrollReveal().reveal('#gallery', { delay: 400 });
ScrollReveal().reveal('#contact', { delay: 500 });
