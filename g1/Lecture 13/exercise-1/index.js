const toTitleCase = require("to-title-case");

const bookTitles = [
    "WomeN At War",
    "The spirit Ring",
    "Shards OF Honor",
    "Falling free",
    "The vor Game",
    "Ethan oF Athos",
    "Brothers In Arms",
    "Borders Of Infinity",
    "Mirror-dance",
    "A-Civil-Campaign",
    "Diplomatic_Immunity",
    "Gentleman_Jole_And_The_Red_Queen",
    "the curse of chalion",
    "paladinOfSouls"
]

const fixedTitles = bookTitles.map(title => toTitleCase(title));
console.log(fixedTitles);