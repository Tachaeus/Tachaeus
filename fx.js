//Hello  world
(function () {
    let name = "Tachaeus";
    "use strict";
    function Hello(Tachaeus) {
    alert(`How are we doing today, ${name}!`);
    }
    Hello("Hello world");
})();


//Check sex using prototypes
const students = [
    {name: "Susan", sex: "f"},
    {name: "Felicia", sex: "f"},
    {name: "Dena", sex: "i"},
    {name: "Veronica", sex: "f"},
    {name: "Lucas", sex: "i"},
    {name: "Loise", sex: "i"},
    {name: "Hope", sex: "f"},
    {name: "Martine", sex: "i"},
    {name: "Cliden", sex: "i"},
    {name: "Alicia", sex: "f"},
    {name: "Fredrick", sex: "m"}
    ]

    const accept = students
    .map(students => students)
    .filter(students => students.sex === "m" || students.sex === "f");

    console.log(`Come on in:`, accept);


