// https://www.babycenter.com/top-baby-names-2016.htm
// Array.from($("#babyNameList").find("td a")).map(a => a.textContent)


function generateNames() {
    const fnames = ["Sophia", "Jackson", "Emma", "Aiden", "Olivia", "Lucas", "Ava", "Liam", "Mia", "Noah", "Isabella", "Ethan", "Riley", "Mason", "Aria", "Caden", "Zoe", "Oliver", "Charlotte", "Elijah", "Lily", "Grayson", "Layla", "Jacob", "Amelia", "Michael", "Emily", "Benjamin", "Madelyn", "Carter", "Aubrey", "James", "Adalyn", "Jayden", "Madison", "Logan", "Chloe", "Alexander", "Harper", "Caleb", "Abigail", "Ryan", "Aaliyah", "Luke", "Avery", "Daniel", "Evelyn", "Jack", "Kaylee", "William", "Ella", "Owen", "Ellie", "Gabriel", "Scarlett", "Matthew", "Arianna", "Connor", "Hailey", "Jayce", "Nora", "Isaac", "Addison", "Sebastian", "Brooklyn", "Henry", "Hannah", "Muhammad", "Mila", "Cameron", "Leah", "Wyatt", "Elizabeth", "Dylan", "Sarah", "Nathan", "Eliana", "Nicholas", "Mackenzie", "Julian", "Peyton", "Eli", "Maria", "Levi", "Grace", "Isaiah", "Adeline", "Landon", "Elena", "David", "Anna", "Christian", "Victoria", "Andrew", "Camilla", "Brayden", "Lillian", "John", "Natalie", "Lincoln", "Isabelle", "Samuel", "Skyler", "Joseph", "Maya", "Hunter", "Lucy", "Joshua", "Lila", "Mateo", "Audrey", "Dominic", "Makayla", "Adam", "Penelope", "Leo", "Claire", "Ian", "Kennedy", "Josiah", "Paisley", "Anthony", "Savannah", "Colton", "Alaina", "Max", "Gabriella", "Thomas", "Violet", "Evan", "Kylie", "Nolan", "Charlie", "Aaron", "Stella", "Carson", "Allison", "Christopher", "Liliana", "Hudson", "Eva", "Cooper", "Callie", "Adrian", "Kinsley", "Jonathan", "Reagan", "Jason", "Sophie", "Charlie", "Alyssa", "Miles", "Alice", "Jeremiah", "Caroline", "Gavin", "Aurora", "Asher", "Eleanor", "Austin", "Juliana", "Ezra", "Annabelle", "Chase", "Emilia", "Alex", "Sadie", "Xavier", "Bella", "Jordan", "Julia", "Tristan", "Keira", "Easton", "Bailey", "Zachary", "Hazel", "Parker", "Jocelyn", "Bryson", "London", "Tyler", "Samantha", "Camden", "Vivian", "Damian", "Gianna", "Declan", "Alexandra", "Elliot", "Cora", "Elias", "Melanie", "Cole", "Everly", "Harrison", "Jordyn", "Zane", "Luna", "Kai"];
    const lnames = ["Burton", "Hatfield", "McCoy", "Johnson"];


    let index = 0;
    for (const fname of fnames) {
        for (const lname of lnames) {
            index += 1;
            console.log(`#${index}: ${fname} ${lname}`);
        }
    }
}

const persons = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate").addEventListener("click", () => {
        generateNames();
    })
})