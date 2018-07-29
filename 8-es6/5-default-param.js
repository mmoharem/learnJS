// ES5
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ?
        lastName = 'Smith' : lastName;
    nationality === undefined ?
        nationality = 'Egypt' : nationality;
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};

// SmithPerson.prototype.default = this.lastName === undefined ?
//     this.lastName = 'Smith' : this.lastName;

var john = new SmithPerson('John', 1990);
console.log(john);

var emmy = new SmithPerson('Emmy', 1992, 'Doe', 'KSA');
console.log(emmy);
*/

// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Egypt') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

var emmy = new SmithPerson('Emmy', 1992, 'Doe', 'KSA');
console.log(emmy);