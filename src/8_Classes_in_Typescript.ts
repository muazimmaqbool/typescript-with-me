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

//const emp2 = new Employee("Bob", 102); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.


//Another example:
class Car{
  name: string;
  model: string;
  color: string;
  petrol:number;

  constructor(name: string, model: string, color: string){
    this.name = name;
    this.model = model;
    this.color = color;
    this.petrol = 0;
  }
  getCarDetails():string{
    return `${this.name} ${this.model} ${this.color}`;
  }
  updateColor(newColor: string): void{
    this.color = newColor;
  }
  addPetrol(liters:number):void{
    this.petrol += liters;
  }
  getPetrolStatus():string{
    return `Current Petrol: ${this.petrol} liters`;
  }
}
const myCar = new Car("Toyota", "Corolla", "Red");
console.log(myCar.getCarDetails());
console.log(`Initial Petrol: ${myCar.petrol} liters`);
myCar.addPetrol(20);
console.log(`Updated Petrol: ${myCar.petrol} liters`);
myCar.updateColor("Blue");
console.log(`Updated Car Details: ${myCar.getCarDetails()}`);
console.log("Petrol Status: " + myCar.getPetrolStatus());