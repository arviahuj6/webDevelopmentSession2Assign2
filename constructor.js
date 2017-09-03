var PersonDetails = (function () {
    // Constructor where the class level variable is passed
    function PersonDetails(name, age) {
        this.name = name;
        this.age = age;
    }
    //Function to return the name and age of an employee
    PersonDetails.prototype.showDetails = function () {
        return "The Person Name is " + this.name + " and age is " + this.age + " years old";
    };
    return PersonDetails;
}());
// Creating the Instance of a Object
var person = new PersonDetails('Arvind', 44);
// Show Details
console.log(person.showDetails());
