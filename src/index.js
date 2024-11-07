// import { Bee, QueenBee, WorkerBee, DroneBee } from '../src/bee.js';

document.addEventListener("DOMContentLoaded", () => {
    const playerName = prompt("Enter your player name:");
    while (!playerName || playerName === null) {
        alert("Please enter a valid player name to start the game.");
        playerName = prompt("Enter your player name:");
    }
    document.getElementById("username").textContent = playerName;
    

    let bees = initializeBees();
    renderSwarmStatus(bees);

    document.getElementById("hit-button").addEventListener("click", () => {
        const bee = getRandomBee(bees);
        if (bee) {
            bee.takeDamage();
            updateMessage(`${bee.type} took ${bee.damage} damage. Remaining HP: ${bee.health}`);
            renderSwarmStatus(bees);
            checkEndGame(bees);
        }
    });

    function initializeBees() {
        return [
            new QueenBee(),
            ...createBees(WorkerBee, 5),
            ...createBees(DroneBee, 8),
        ];
    }

    function renderSwarmStatus(bees) {
        const swarmStatus = document.getElementById("swarm-status");
        swarmStatus.innerHTML = bees.map(bee => `
            <div class="bee-status ${bee.isAlive() ? 'alive' : 'dead'}">
                ${bee.type}: ${bee.isAlive() ? bee.health + " HP" : "Dead"}
            </div>
        `).join('');
    }

    function updateMessage(message) {
        const messageElement = document.getElementById("message");
        messageElement.textContent = message;
    }

    function checkEndGame(bees) {
        const queen = bees.find(bee => bee.type === 'Queen');
        if (!queen.isAlive()) {
            endGame("GAME OVER!! The Queen has died! The swarm is lost!");

        } else if (!bees.some(bee => bee.isAlive())) {
            endGame("GAME OVER!! All the bees died!");
        }
    }

    function endGame(message) {
        updateMessage(message);
        alert(message);
        bees = initializeBees();
        renderSwarmStatus(bees);
    }
});
