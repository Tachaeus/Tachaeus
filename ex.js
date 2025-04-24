//Date increment
function nextDate() {
    return Date.setDate(Date.getDate() + 1);
}
const tomorrow = new Intl.DateTimeFormat("en-Uk", {dateStyle: "long"});
console.log(tomorrow.format(nextDate.Date));


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