function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.opacity = Math.random();
    heart.style.animation = `fall ${Math.random() * 5 + 3}s linear`;

    document.body.appendChild(heart);

    setTimeout(() => { heart.remove(); }, 7000);
}

setInterval(createHeart, 300);

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    to { transform: translateY(120vh); }
}
`;
document.head.appendChild(style);
