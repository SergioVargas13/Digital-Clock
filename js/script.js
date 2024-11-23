document.addEventListener('DOMContentLoaded', () => {
    const clockElement = document.getElementById('clock');

    const updateClock = () => {
        const now = new Date();

        const timeString = now.toLocaleString('es-CO', { hour12: true});
        clockElement.textContent = timeString;
        console.log('Hora actualizada: ', timeString);
    }

    updateClock();
    setInterval(updateClock, 1000);
})