/* Mobile Nav Toggle */
function toggleNav() {
  document.getElementById('main-nav').classList.toggle('show');
}
function closeNav() {
  document.getElementById('main-nav').classList.remove('show');
}

/* Dark Mode */
function toggleMode() {
  document.body.classList.toggle('dark');
}

/* Sound Toggle */
function toggleSound() {
  const video = document.getElementById('bg-video');
  const btn = document.getElementById('sound-btn');
  video.muted = !video.muted;
  btn.textContent = video.muted ? '🔇 Sound On' : '🔊 Sound Off';
  // try to play (needed on some mobile browsers)
  video.play().catch(()=>{});
}

/* Welcome Popup Confetti */
window.addEventListener('load', () => {
  const popup = document.getElementById('welcome-popup');
  if (!popup) return;
  for (let i = 0; i < 30; i++) {
    const c = document.createElement('div');
    c.className = 'confetti';
    c.style.left = Math.random() * 100 + 'vw';
    c.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
    popup.appendChild(c);
  }
  // remove after fade
  setTimeout(() => popup.remove(), 3000);
});

/* ScrollReveal Animations */
ScrollReveal().reveal('.hero-content', { delay: 150, origin: 'top', distance: '50px', duration: 600 });
ScrollReveal().reveal('.about-wrapper', { delay: 200, origin: 'bottom', distance: '40px', duration: 600 });
ScrollReveal().reveal('.skills-grid .skill-card', { interval: 80, origin: 'bottom', distance: '20px' });
ScrollReveal().reveal('.project-card', { interval: 120, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.gallery-grid img, .gallery-grid video', { interval: 80, origin: 'bottom', distance: '20px' });
ScrollReveal().reveal('.section-contact', { delay: 200, origin: 'bottom', distance: '30px' });
