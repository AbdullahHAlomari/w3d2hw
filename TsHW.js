var persons = [
    { age: 27, name: "Abdullah", occupation: "IT Infrastructure" },
    { age: 24, name: "Ahmed", occupation: "DevOps" },
    { age: 34, name: "Khaled", occupation: "Sysytem Analyst" },
    { age: 32, name: "Yousef", specialty: "Teacher" },
    { age: 41, name: "Abeer", specialty: "Doctor" },
    { age: 35, name: "Ayman", specialty: "Web Developer" }
];
function printUsers(persons) {
    persons.forEach(function (info) {
        if ('occupation' in info) {
            console.log("User deatils: Age: ".concat(info.age, ", Name: ").concat(info.name, " and occupation is: ").concat(info.occupation));
        }
        else {
            console.log("Admin deatils: Age: ".concat(info.age, ", Name: ").concat(info.name, " and occupation is: ").concat(info.specialty));
        }
    });
}
printUsers(persons);
function changeAge(persons, newAge) {
    persons.age = newAge;
}
changeAge(persons[0], 19);
console.log("\n After change the age: \n");
printUsers(persons);
