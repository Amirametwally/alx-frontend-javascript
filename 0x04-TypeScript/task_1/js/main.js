var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
// Updated printTeacher function
function printTeacher(firstName, lastName) {
    // Ensure the first character of firstName is capitalized
    var formattedFirstName = firstName.charAt(0).toUpperCase();
    // Use the full lastName as is
    var formattedLastName = lastName;
    // Return the formatted name
    return "".concat(formattedFirstName, ". ").concat(formattedLastName);
}
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
