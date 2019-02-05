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

    groupOne.classroom = "Palmyra";

    groupOne.assistant = new Assistant("Trajan", "Stevkovski");

    const intro = new Subject("Introduction to programming", "g1");
    intro.lecturer = new Lecturer("Risto", "Panchevski");
    groupOne.addSubject(intro);

    const htmlCss = new Subject("Basic HTML and CSS", "g1");
    htmlCss.lecturer = new Lecturer("Jane", "Dimeski");
    groupOne.addSubject(htmlCss);

    const basicJs = new Subject("Basic JavaScript", "g1");
    basicJs.lecturer = new Lecturer("Dragan", "Gelevski");
    groupOne.addSubject(basicJs);

    const advancedJs = new Subject("Advanced JavaScript", "g1");
    advancedJs.lecturer = new Lecturer("Wekoslav", "Stefanovski");
    groupOne.addSubject(advancedJs);

    groupOne.currentSubject = advancedJs;

}

function displayGroup(group) {

    document.getElementById("name").textContent = group.name;
    document.getElementById("classroom").textContent = group.classroom;
    document.getElementById("assistant").textContent = group.assistant.getFullName();
    document.getElementById("current-subject").textContent = group.currentSubject.getSubjectInfo();

    const studentsList = document.getElementById("students");
    studentsList.innerHTML = "";
    
    for (const student of group.getAllStudents()) {
        const studentItem = document.createElement("li");
        studentItem.textContent = student.getStudentInfo();
        studentsList.appendChild(studentItem);
    }

    const subjectsList = document.getElementById("subjects");
    subjectsList.innerHTML = "";

    for (const subject of group.getAllSubjects()) {
        const subjectItem = document.createElement("li");
        subjectItem.textContent = subject.getSubjectInfo();
        subjectsList.appendChild(subjectItem);
    }



}