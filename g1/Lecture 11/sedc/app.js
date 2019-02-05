const groupOne = new Group("Group One");

document.addEventListener("DOMContentLoaded", () => {
    initGroup(groupOne);
    displayGroup(groupOne);
})


function initGroup(groupOne) {

    groupOne.addStudent(new Student(3, "Jovan", "Jovanovski", "G1"));
    groupOne.addStudent(new Student(4, "Vladimir", "Poposki", "G1"));
    groupOne.addStudent(new Student(1, "Todor", "Janevski", "G1"));
    groupOne.addStudent(new Student(2, "Goran", "Kuzmanovski", "G1"));


    // allStudents.push()

    // groupOne.classroom = "Palmyra";

    // groupOne.assistant = new Assistant("Trajan", "Stevkovski");
}

function displayGroup(group) {

    document.getElementById("name").textContent = group.name;
    const studentsList = document.getElementById("students");
    studentsList.innerHTML = "";

    for (const student of group.getAllStudents()) {
        const studentItem = document.createElement("li");
        studentItem.textContent = student.getStudentInfo();
        studentsList.appendChild(studentItem);
    }

}