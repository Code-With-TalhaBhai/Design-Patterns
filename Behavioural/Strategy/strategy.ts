// --- Strategy Interface for Walk ---
interface WalkableRobot {
    walk(): void;
}

// --- Concrete Strategies for Walk ---
class NormalWalk implements WalkableRobot {
    walk(): void {
        console.log("Walking normally...");
    }
}

class NoWalk implements WalkableRobot {
    walk(): void {
        console.log("Cannot walk.");
    }
}

// --- Strategy Interface for Talk ---
interface TalkableRobot {
    talk(): void;
}

// --- Concrete Strategies for Talk ---
class NormalTalk implements TalkableRobot {
    talk(): void {
        console.log("Talking normally...");
    }
}

class NoTalk implements TalkableRobot {
    talk(): void {
        console.log("Cannot talk.");
    }
}

// --- Strategy Interface for Fly ---
interface FlyableRobot {
    fly(): void;
}

// --- Concrete Strategies for Fly ---
class NormalFly implements FlyableRobot {
    fly(): void {
        console.log("Flying normally...");
    }
}

class NoFly implements FlyableRobot {
    fly(): void {
        console.log("Cannot fly.");
    }
}

// --- Robot Base Class ---
abstract class Robot {
    protected walkBehavior: WalkableRobot;
    protected talkBehavior: TalkableRobot;
    protected flyBehavior: FlyableRobot;

    constructor(w: WalkableRobot, t: TalkableRobot, f: FlyableRobot) {
        this.walkBehavior = w;
        this.talkBehavior = t;
        this.flyBehavior = f;
    }

    walk(): void {
        this.walkBehavior.walk();
    }

    talk(): void {
        this.talkBehavior.talk();
    }

    fly(): void {
        this.flyBehavior.fly();
    }

    abstract projection(): void;
}

// --- Concrete Robot Types ---
class CompanionRobot extends Robot {
    projection(): void {
        console.log("Displaying friendly companion features...");
    }
}

class WorkerRobot extends Robot {
    projection(): void {
        console.log("Displaying worker efficiency stats...");
    }
}

// --- Main Simulation ---
const robot1 = new CompanionRobot(new NormalWalk(), new NormalTalk(), new NoFly());
robot1.walk();
robot1.talk();
robot1.fly();
robot1.projection();

console.log()
console.log("--------------------");
console.log()

const robot2 = new WorkerRobot(new NoWalk(), new NoTalk(), new NormalFly());
robot2.walk();
robot2.talk();
robot2.fly();
robot2.projection();
