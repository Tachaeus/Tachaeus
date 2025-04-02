//Date increment
function incDate(Date) {
    return Date.setDate(Date.getDate() + 1);
}
const date = new Date();
console.log(date);

//Class
class worker {
    fullName;
    tenure;
    position;

    constructor(fullName, tenure, position) {
        this.fullName = fullName;
        this.tenure = tenure;
        this.position = position;
    }

    introduceSelf() {
        console.log(`Hello, my name is "${this.fullName}", I have been with the firm ${this.tenure} years, working as "${this.position}👩‍🏫"`);
    }    
}
const celine = new worker("Celine Shyre", 2, "an intern");
celine.introduceSelf();

//Class extensions
class workerLogs extends worker {
    constructor(fullName) {
        super(fullName);
    }

    introduceSelf() {
        console.log(`I'm ${this.fullName}. Here are the extra-hrs I've clocked this week:`);
    }

    extraHours(hours) {
        const extraHours = Math.floor(Math.random() * (15-1) + 2);
        console.log("⏲", extraHours);
    }
}
const flourence = new workerLogs("Flourence Wakefeild");
flourence.introduceSelf();
flourence.extraHours("I've clocked");

//Currency format
const price = Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "EUR",
}
);
let tax = 15.20
console.log(price.format(49.99 - tax));



const ppl = [ Dennis = "male", Cliden = "intersex", Sophia = "female"];


if (ppl === "male" || ppl === "female") {
    console.log(name, "You have a green light!");
} else {
    console.log("STEP!!!");
}