class Bee {
    constructor(type, health, damage) {
        this.type = type;
        this.health = health;
        this.damage = damage;
    }

    takeDamage() {
        this.health = this.damage --;
        if (this.health < 0){
            this.health = 0;
        }
    }

    isAlive() {
        return this.health > 0;
    }
}

class QueenBee extends Bee {
    constructor() {
        super('Queen', 100, 8);
    }
}

class WorkerBee extends Bee {
    constructor() {
        super('Worker', 75, 10);
    }
}

class DroneBee extends Bee {
    constructor() {
        super('Drone', 50, 12);
    }
}

// class TestBee extends Bee {
//     constructor() {
//         super('Test', 50, 4);
//     }
// }