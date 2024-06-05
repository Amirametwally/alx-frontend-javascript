var student_one = {
    firstName: 'Amira',
    lastName: 'Metwally',
    age: 25,
    location: 'Cairo'
};
var student_two = {
    firstName: 'Mohammed',
    lastName: 'Metwally',
    age: 33,
    location: 'Mansoura'
};
var studentsList = [student_one, student_two];
var table = document.createElement('table');
var tbody = document.createElement('tbody');
table.style.background = "green";
table.appendChild(tbody);
studentsList.forEach(function (student) {
    var row = document.createElement('tr');
    var nameCell = document.createElement('td');
    var locationCell = document.createElement('td');
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
