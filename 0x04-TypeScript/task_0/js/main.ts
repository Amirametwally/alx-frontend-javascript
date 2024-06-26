interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student_one: Student = {
  firstName: 'Amira',
  lastName: 'Metwally',
  age: 25,
  location: 'Cairo'
};

const student_two: Student = {
  firstName: 'Mohammed',
  lastName: 'Metwally',
  age: 33,
  location: 'Mansoura'
};

const studentsList: Student[] = [student_one, student_two];

const table = document.createElement('table');
const tbody = document.createElement('tbody');

table.style.background = "green";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid green";
  locationCell.style.border = "1px solid green";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});


document.body.appendChild(table);
