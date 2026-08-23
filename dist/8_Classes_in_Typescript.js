/*
-> Classes:
    Classess serve as reusable blueprints for creating objects, encapsulating both data (properties) and behavior (methods).
    They build directly upon JavaScript's ES6 class syntax but add robust static typing, access modifiers, and advanced object-oriented features.
*/
//Basic Class Structure:
//A standard TypeScript class includes typed field declarations, a constructor function to initialize those fields, and class methods.
class Employee {
    // 1. Field Declarations
    id;
    name;
    // 2. Constructor (while during creation of object of type Employee class)
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    // 3. Method
    getDetails() {
        return `${this.name} (ID: ${this.id})`;
    }
}
// Creating an instance
const emp = new Employee(6655, "Muazim");
console.log(emp.getDetails()); // Output: Muazim (ID: 6655)
