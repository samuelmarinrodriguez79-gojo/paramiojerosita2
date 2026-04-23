const heart = document.querySelector('.heart-icon');
const floating = document.querySelector('.floating-hearts');

const colors = ['#ff8ad7', '#7addff', '#fff1a8', '#b78bff'];
const animals = ['🐶', '🐱', '🐰', '🦜', '🐢', '🦊', '🐠'];

function createFloatingHeart() {
  const dot = document.createElement('div');
  dot.className = 'mini-heart';
  const size = Math.random() * 18 + 10;
  dot.style.width = `${size}px`;
  dot.style.height = `${size}px`;
  dot.style.left = `${Math.random() * 100}%`;
  dot.style.background = `radial-gradient(circle, ${colors[Math.floor(Math.random() * colors.length)]}, transparent 70%)`;
  dot.style.opacity = '0';
  dot.style.transition = 'transform 1.8s ease, opacity 1.8s ease';
  floating.appendChild(dot);

  requestAnimationFrame(() => {
    dot.style.transform = `translate(-50%, -50%) translateY(-${120 + Math.random() * 80}px) scale(1.05)`;
    dot.style.opacity = '1';
  });

  setTimeout(() => {
    dot.style.opacity = '0';
    dot.addEventListener('transitionend', () => dot.remove(), { once: true });
  }, 1600);
}

function createCursorHeart(x, y) {
  const dot = document.createElement('div');
  dot.className = 'cursor-heart';
  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  dot.style.opacity = '0';
  dot.style.transition = 'transform 0.8s ease-out, opacity 0.8s ease-out';
  document.body.appendChild(dot);

  requestAnimationFrame(() => {
    dot.style.opacity = '1';
    dot.style.transform = 'translate(-50%, -50%) translateY(-24px) scale(1.25)';
  });

  setTimeout(() => {
    dot.style.opacity = '0';
    dot.style.transform = 'translate(-50%, -50%) translateY(-50px) scale(0.65)';
    dot.addEventListener('transitionend', () => dot.remove(), { once: true });
  }, 180);
}

function createAnimalBurst(x, y) {
  const count = 4;
  for (let i = 0; i < count; i += 1) {
    const animal = document.createElement('div');
    animal.className = 'animal-particle';
    animal.textContent = animals[Math.floor(Math.random() * animals.length)];
    const angle = Math.random() * Math.PI * 2;
    const distance = 90 + Math.random() * 40;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    animal.style.left = `${x}px`;
    animal.style.top = `${y}px`;
    animal.style.opacity = '0';
    animal.style.transition = 'transform 0.95s ease-out, opacity 0.95s ease-out';
    document.body.appendChild(animal);

    requestAnimationFrame(() => {
      animal.style.opacity = '1';
      animal.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px) scale(1.15)`;
    });

    setTimeout(() => {
      animal.style.opacity = '0';
      animal.addEventListener('transitionend', () => animal.remove(), { once: true });
    }, 780);
  }
}

function pulseBackground() {
  document.body.style.background = `radial-gradient(circle at top, #f3e8ff 0%, #c5dcff 38%, #4b6fed ${48 + Math.sin(Date.now() / 1200) * 6}%)`;
}

setInterval(createFloatingHeart, 650);
setInterval(pulseBackground, 1300);

heart.addEventListener('mouseenter', () => {
  heart.style.transform = 'scale(1.25)';
});
heart.addEventListener('mouseleave', () => {
  heart.style.transform = 'scale(1)';
});

document.addEventListener('mousemove', (event) => {
  if (Math.random() > 0.66) {
    createCursorHeart(event.clientX, event.clientY);
  }
});

document.addEventListener('click', (event) => {
  createAnimalBurst(event.clientX, event.clientY);
});
