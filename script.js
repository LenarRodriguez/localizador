function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById("clock");
    clockElement.textContent = now.toLocaleTimeString();

    const dateElement = document.getElementById("date");
    dateElement.textContent = now.toLocaleDateString();

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const locationElement = document.getElementById("location");
    locationElement.textContent = new Date().toLocaleDateString('es-ES', options);

}

updateClock();
setInterval(updateClock, 1000);
