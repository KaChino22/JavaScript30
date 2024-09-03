const numbers = Array.from(document.querySelectorAll('.number'));
const clockFaceStyle = window.getComputedStyle(
    document.querySelector('.clock__face'),
);
const numberStyle = window.getComputedStyle(document.querySelector('.number'));
const radius = removeUnit(clockFaceStyle.getPropertyValue('width')) / 2;
const numberSize = removeUnit(numberStyle.getPropertyValue('width'));
const numberPadding = 0.8;

function removeUnit(string) {
    return Number(string.replace('px', ''));
}

numbers.forEach((number) => {
    const value = number.innerHTML;
    const angle = Number(`${(value * 30 * 2 * Math.PI) / 360}`);
    const x =
        Math.sin(angle) * radius * numberPadding + radius - numberSize / 2;
    const y =
        radius - numberSize / 2 - Math.cos(angle) * radius * numberPadding;
    number.style.top = `${y}px`;
    number.style.left = `${x}px`;
});

// function drawHand(hand) {
//     const date = new Date();
//     const hours = date.getHours() % 12;
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     // console.log(hours, minutes, seconds);

//     const handHour = document.querySelector('.hand__hour');
//     const handMinute = document.querySelector('.hand__minutes');
//     const handSecond = document.querySelector('.hand__seconds');

//     const { height, width, top, left } = window.getComputedStyle(handSecond);
//     // console.log(height, width, top, left);

//     const angle = -90 + (date.getSeconds() / 60) * 360;
//     handSecond.style.transform = `translate3d(calc(-${width}/2),calc(${height}/2), 0) rotate(${angle}deg) translate3d(calc(${width}/2), 0, 0)`;
// }

// setInterval(drawHand, 1000);

const secondHand = document.querySelector('.hand__seconds');
const minsHand = document.querySelector('.hand__minutes');
const hourHand = document.querySelector('.hand__hour');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();
