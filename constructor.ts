class PersonDetails
{
        private age: number;
        private name: string;

    
    //Function to return the name and age of an employee
     
    showDetails()
    {
        return `The Person Name is ${this.name} and age is ${this.age} years old`;
    }

    // Constructor where the class level variable is passed
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
}

// Creating the Instance of a Object
var person: PersonDetails = new PersonDetails('Arvind', 44);

// Show Details
console.log(person.showDetails()) ;
