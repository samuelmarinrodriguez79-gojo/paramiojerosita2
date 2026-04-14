document.addEventListener('DOMContentLoaded', function() {
    const heart = document.querySelector('.heart');
    const messages = [
        "¡Eres la mejor veterinaria de todo el !",
        "¡Sigue adelante, los animales te necesitan!",
        "¡Tu pasión por los animales es inspiradora!"
    ];
    let messageIndex = 0;

    heart.addEventListener('click', function() {
        const newMessage = document.createElement('p');
        newMessage.className = 'text';
        newMessage.textContent = messages[messageIndex % messages.length];
        document.querySelector('.message').appendChild(newMessage);
        messageIndex++;
    });
});