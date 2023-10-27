const visitsDisplay = document.querySelector(".visits-message");
const visitCounter = document.getElementById("visit-count"); // New visit counter element
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
let lastVisitTime = window.localStorage.getItem("lastVisitTime");
let message = "";

if (numVisits === 0) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    if (lastVisitTime) {
        const currentTime = new Date().getTime();
        const previousVisitTime = Number(lastVisitTime);

        // Calculate the time difference in milliseconds
        const timeDifference = currentTime - previousVisitTime;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference < 1) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
        }
    }
}

visitsDisplay.textContent = message;
numVisits++;
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisitTime", new Date().getTime().toString());

// Update the visit counter
visitCounter.textContent = numVisits;
