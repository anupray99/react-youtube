const arr = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Faythe",
    "Grace",
    "Heidi",
    "Ivan",
    "Judy",
    "Mallory",
    "Niaj",
    "Olivia",
    "Peggy",
    "Sybil",
    "Trent",
    "Victor",
    "Walter",
    "Xander",
    "Yvonne",
    "Zara"
];

const messages = [
    "Hello, how are you today?",
    "Don't forget to attend the meeting at 10 AM.",
    "Have a great day!",
    "Remember to submit your report by the end of the day.",
    "Did you see the latest news?",
    "Let's catch up over coffee soon.",
    "Happy Birthday! Have an amazing year ahead.",
    "Congratulations on your achievement!",
    "Can you help me with this task?",
    "Thank you for your assistance.",
    "Good luck with your presentation.",
    "I hope you're doing well.",
    "Let's plan a trip together.",
    "What are your plans for the weekend?",
    "Stay safe and take care."
];

function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
module.exports = {
    getRandomName,
    getRandomMessage,
}
