
// import { Bee, QueenBee, WorkerBee, DroneBee } from '../src/bee.js'; 
//uncomment import line to run this test

describe("Bee Class", function () {
    it("should initialize a QueenBee with 100 health and 8 damage", function () {
        const queen = new QueenBee();
        expect(queen.type).toBe("Queen");
        expect(queen.health).toBe(100);
        expect(queen.damage).toBe(8);
    });

    it("should initialize a WorkerBee with 75 health and 10 damage", function () {
        const worker = new WorkerBee();
        expect(worker.type).toBe("Worker");
        expect(worker.health).toBe(75);
        expect(worker.damage).toBe(10);
    });

    it("should initialize a DroneBee with 50 health and 12 damage", function () {
        const drone = new DroneBee();
        expect(drone.type).toBe("Drone");
        expect(drone.health).toBe(50);
        expect(drone.damage).toBe(12);
    });


    it("should reduce health when takeDamage() is called", function () {
        const worker = new WorkerBee();
        worker.takeDamage();
        expect(worker.health).toBe(65); // Initial 75 - 10 damage
    });

    it("should set health to 0 if damage exceeds current health", function () {
        const drone = new DroneBee();
        drone.takeDamage();
        drone.takeDamage();
        drone.takeDamage();
        drone.takeDamage(); // Damage exceeds health
        expect(drone.health).toBe(0);
    });

    it("should return true if bee is alive", function () {
        const worker = new WorkerBee();
        expect(worker.isAlive()).toBe(true);
    });

    it("should return false if bee health is 0", function () {
        const queen = new QueenBee();
        queen.health = 0;
        expect(queen.isAlive()).toBe(false);
    });
});