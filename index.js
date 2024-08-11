// Code your solutions in this file
let names = ["Charlie", "Samip", "Ali"];
let event = "birthday";


// Define the 'writeCards()' function
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}
// Call 'writeCards()' with the names from the test
console.log(writeCards());


// Define the 'countDown()' function
function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber);
        startingNumber--;
    };
};

// Call 'countDown()' with a starting number of 10
countDown(10);
