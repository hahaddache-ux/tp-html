function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,'0');
    const minutes = now.getMinutes().toString().padStart(2,'0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
updateClock();

function openApp(appName) {
    console.log("Ouverture de : " + appName);
    alert("Application " + appName + " est en cours de développement !");
}

function startMenu() {
    alert("Menu Démarrer cliqué !");
}

const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
    icon.addEventListener('mousedown', () => icon.style.transform = "scale(0.9)");
    icon.addEventListener('mouseup', () => icon.style.transform = "scale(1)");
});
