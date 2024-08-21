function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;
}

function changeFontSize(value) {
    fontSize = 2 + (value * 0.2);
    document.getElementById('clock').style.fontSize = `${fontSize}em`;
}

function initializeFontSize() {
    const fontSizeRange = document.getElementById('fontSizeRange');
    fontSizeRange.value = 10;
    changeFontSize(fontSizeRange.value);
}

function toggleMode(event) {
    const bodyElement = document.body;
    bodyElement.classList.toggle('dark-mode');
}

//Loop to update every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately and set range value
updateClock(); 
initializeFontSize();
