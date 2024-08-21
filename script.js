const clock = new Date();

function setDigitWidth(num) {
    return num.split('').map(digit => `<span>${digit}</span>`).join('');
}

function updateClock() {
    clock.setTime(Date.now());
    let myHours = clock.getHours() % 12;
    myHours = myHours ? myHours : 12;
    const hours = myHours.toString().padStart(2, '0');
    const minutes = clock.getMinutes().toString().padStart(2, '0');
    const seconds = clock.getSeconds().toString().padStart(2, '0');
    const ampm = clock.getHours() > 11 ? 'PM' : 'AM';

    const timeString = `${setDigitWidth(hours)}:${setDigitWidth(minutes)}:${setDigitWidth(seconds)}${setDigitWidth(ampm)}`;
    document.getElementById('clock').innerHTML = timeString;
}

function changeFontSize(value) {
    const fontSize = 2 + (value * 0.2);
    document.getElementById('clock').style.fontSize = `${fontSize}em`;
}

function toggleMode(event) {
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-mode');
}

setInterval(updateClock, 1000);
updateClock();
const fontSizeRange = document.getElementById('fontSizeRange');
fontSizeRange.value = 10;
changeFontSize(fontSizeRange.value);
