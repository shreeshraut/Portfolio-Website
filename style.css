/* ===========================
   Dark Mode Toggle
=========================== */
function toggleMode() {
  document.body.classList.toggle('dark');
}

/* ===========================
   Sound Toggle for Hero Video
=========================== */
function toggleSound() {
  const video = document.getElementById('bg-video');
  const btn = document.getElementById('sound-btn');

  // ensure video plays (iOS often pauses)
  video.play().catch(() => { /* ignore */ });

  if (video.muted) {
    video.muted = false;
    btn.textContent = '🔊 Sound Off'; // clicking again will mute
  } else {
    video.muted = true;
    btn.textContent = '🔇 Sound On';
  }
}

/* ===========================
   Confetti + Welcome Popup
=========================== */
window.addEventListener('load', () => {
  const popup = document.getElementById('welcome-popup');
  if (popup) {
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 100 + 'vw';
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
      popup.appendChild(confetti);
    }
    // remove popup from DOM after fade completes
    setTimeout(() => {
      popup.parentNode && popup.parentNode.removeChild(popup);
    }, 2500); // matches CSS delay+duration
  }
});

/* ===========================
   ScrollReveal Animations
=========================== */
ScrollReveal().reveal('.hero-text', { delay: 100, origin: 'bottom', distance: '40px', duration: 600 });
ScrollReveal().reveal('#about .profile-pic', { delay: 150, origin: 'left', distance: '40px', duration: 600 });
ScrollReveal().reveal('#about p', { delay: 250, origin: 'right', distance: '40px', duration: 600, interval: 100 });
ScrollReveal().reveal('.skills-grid .skill-card', { interval: 80, distance: '20px', origin: 'bottom' });
ScrollReveal().reveal('.project-card', { interval: 120, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.gallery-grid .media-wrapper', { interval: 80, origin: 'bottom', distance: '20px' });
ScrollReveal().reveal('.section-contact', { delay: 200, origin: 'bottom', distance: '30px' });
