// Define user interface
interface User {
    age: number;
    name: string;
    occupation:	string;
}

//Define Admin interface
interface Admin {
    age: number;
    name: string;
    specialty:	string;
}

// Aliases
type userAdmin = User | Admin;

// Array for union User and Admin
let persons: userAdmin[] = [
    
    {age: 27, name: "Abdullah", occupation: "IT Infrastructure"},
    {age: 24, name: "Ahmed", occupation: "DevOps"},
    {age: 34, name: "Khaled", occupation: "Sysytem Analyst"},
    {age: 32, name: "Yousef", specialty: "Teacher"},
    {age: 41, name: "Abeer", specialty: "Doctor"},
    {age: 35, name: "Ayman", specialty: "Web Developer"}
]

// Function to print admin and user seperate 
function printUsers(persons: userAdmin[]): void {
    persons.forEach(info => {
        if ('occupation' in info) {
            console.log(`User deatils: Age: ${info.age}, Name: ${info.name} and occupation is: ${info.occupation}`);
        }
        else{
            console.log(`Admin deatils: Age: ${info.age}, Name: ${info.name} and occupation is: ${info.specialty}`);
            
        }     
    })
    
}
printUsers(persons)

// Function to change the age data 
function changeAge(persons:userAdmin, newAge: number): void{
    persons.age = newAge    
}

changeAge(persons[0], 19) 
console.log("\n After change the age: \n");

printUsers(persons);