document.addEventListener("DOMContentLoaded", () => {
    const musicButton = document.getElementById("musicButton");
    const music = document.getElementById("birthdayMusic");

    musicButton.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicButton.textContent = "⏸ Остановить музыку";
        } else {
            music.pause();
            musicButton.textContent = "🎵 Включить музыку";
        }
    });

    // Жүрекшелердің түсу анимациясы
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
});

