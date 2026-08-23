/*
-> Classes:
    Classess serve as reusable blueprints for creating objects, encapsulating both data (properties) and behavior (methods). 
    They build directly upon JavaScript's ES6 class syntax but add robust static typing, access modifiers, and advanced object-oriented features.
*/
//Basic Class Structure:
//A standard TypeScript class includes typed field declarations, a constructor function to initialize those fields, and class methods.
class Employee {
  // 1. Field Declarations
  id: number;
  name: string;

  // 2. Constructor (while during creation of object of type Employee class)
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  // 3. Method
  getDetails(): string {
    return `${this.name} (ID: ${this.id})`;
  }
}

// Creating an instance
const emp = new Employee(101, "Alice");
console.log(emp.getDetails()); // Output: Alice (ID: 101)
