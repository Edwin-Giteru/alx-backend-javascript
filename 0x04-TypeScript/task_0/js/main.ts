interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Alice",
    lastName: "Smith",
    age: 21,
    location: "Los Angeles",
  };
const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = table.insertRow();
headerRow.innerHTML = "<th>First Name</><th>Location</th>";

studentsList.forEach((student) => {
    const row = table.insertRow();
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;

});
document.body.appendChild(table)