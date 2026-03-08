// const time = 12;
const isAfternoon = true
/*
if (time >= 12 && isAfternoon) {
    console.log("Good afternoon!");
} else if (time >= 12 && !isAfternoon) {
    console.log("Good morning!");
}
*/
 // Ternary operator example
const timeOfDay = isAfternoon === true ? 'Afternoon' : 'Morning';
console.log('Time of Day (Ternary)', timeOfDay);

// Function practice
function greetStudent(student) {
    return `Hello, ${student}!`;
}
console.log(greetStudent("Lucas"));