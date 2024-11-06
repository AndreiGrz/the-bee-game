function getRandomBee(bees) {
    const aliveBees = bees.filter(bee => bee.isAlive());
    return aliveBees[Math.floor(Math.random() * aliveBees.length)];
}

function createBees(beeClass, count) {
    return Array.from({ length: count }, () => new beeClass());
}
