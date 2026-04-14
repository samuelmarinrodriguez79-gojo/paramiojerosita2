const messages = [
    "te amo muchísimo",
    "gracias por ser mi mejor amiga",
    "eres mi ojerosa favorita",
    "espero que te vaya bien en la vida",
    "eres la mejor persona que conozco",
    "gracias por estar siempre ahí para mí",
    "te deseo lo mejor para ti",
    "eres una persona increíble y te mereces todo lo bueno en la vida",
    "amo amarte ",
];

const container = document.getElementById("blubbles-text");

function createBubble() {
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerText = messages[Math.floor(Math.random() * messages.length)];

    const left = Math.random() * 80 + 10; // x en vw
    const delay = Math.random() * 1.5;
    const scale = 0.9 + Math.random() * 0.7;

    bubble.style.left = `${left}vw`;
    bubble.style.bottom = "-40px";
    bubble.style.transform = `scale(${scale})`;
    bubble.style.animationDelay = `${delay}s`;

    container.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 9000);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "hearts";
    heart.innerText = "❤";

    const left = Math.random() * 90;
    const size = 18 + Math.random() * 40;
    const duration = 5 + Math.random() * 4;

    heart.style.left = `${left}vw`;
    heart.style.fontSize = `${size}px`;
    heart.style.animationDuration = `${duration}s`;

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

setInterval(createBubble, 450);
setInterval(createHeart, 700);