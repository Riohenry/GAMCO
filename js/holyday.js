
// Countdown Timer
const countdownElement = document.getElementById("countdown");
const holidayDate = new Date("December 25, 2023 00:00:00").getTime();

const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = holidayDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Happy Holidays!";
    }
}, 1000);

// Holiday Greeting
document.getElementById("greetButton").addEventListener("click", function() {
    const greeting = document.getElementById("greeting");
    greeting.textContent = "Wishing you a joyful holiday season filled with peace and happiness!";
    greeting.classList.remove("hidden");
    greeting.classList.add("show");
});