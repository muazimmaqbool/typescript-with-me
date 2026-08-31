/*
->Type Alias:
    A type alias in TypeScript allows you to create a custom name for any existing type. 
    It acts as a shortcut or a blueprint, making your code cleaner, easier to read, and reusable. 
    You declare it using the type keyword followed by an assignment operator (=)
*/
// 1. Primitive Alias (acts as documentation)
type userName = string;
type userId = string | number; // (Note: | is called union and is discussed in file: 5_Union_Intersection.ts)

let name: userName = "muazim@6655";
// name=123456 //error

// let userId:userId=true //error as userId will accept string or numbers only
let userId: userId = "abc123"; // works
// userId=false // error
userId = 6655; // works fine

// 2. Object Type Alias
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
  role?:String
};
//using it
const currentUser: User = {
  id: 101,
  name: "Alice",
  isAdmin: true, // isAdmin: "true" -> error
  // role:"SuperAdmin" //Works fine as role is nor required it's optional
};

// 3. Union Type Alias (highly common)
type Status = "pending" | "approved" | "rejected";

//using it:
function updateStatus(current: Status): void {
  console.log(`Status is ${current}`);
}
updateStatus("pending"); // works
// updateStatus("new") // error as updateStatus function can accept only Status values

// 4. Function Type Alias
type Greet = (name: string) => string;

// The function follows the Greet type: name → string and return value → string
const greetUser: Greet = (name) => {
  return `Hi, ${name}!`;
  // return 1234; // error
};

console.log(greetUser("Muazim"));
// console.log(greetUser(123)) // error

//Another function example:
type add = (a: number, b: number) => number;

const addNumbers: add = (a, b) => {
  return a + b;
  // return `${a+b}` // error as addNumbers returns only number
};
console.log(addNumbers(10, 20));

//Type Aliases vs. Interfaces:

//-> Interfaces can be extended, type aliases cannot
interface Car {
  name: string;
}
interface modal extends Car {
    carModal:string
}

//now this myCar object can take both name and carModal as modal interface extends Car properties
let myCar:modal={ // if you do like this: myCar:Car ,// it will throw error if you use carModal field also
    name:"BMW M5",
    carModal:"2026 xtm5"
}

//->Interfaces can be declared multiple times and will merge
interface Bike{
    name:string
}
interface Bike{
    type:string
}
//as these two interfaces are having same name which results in one interface having both name and type
let myBike:Bike={
    name:"BMW GS 1250",
    type:"Sports + Offroad"
}

//interfaces are commonly used for object shapes 
//type alias are commonly used for unions/intersections



// | Interface                                 | Type Alias                                                      |
// | ----------------------------------------- | --------------------------------------------------------------- |
// | Mainly used for object/class shapes       | Can define objects, primitives, unions, tuples, functions, etc. |
// | Supports declaration merging              | Does not support declaration merging                            |
// | Can be extended with `extends`            | Can use intersections `&`                                       |
// | Commonly preferred for public object APIs | More flexible for complex types                                 |

//Key Rule to Remember: Aliasing does not create a new type. It simply creates a new name that points to that exact structure.
//                      When compilation finishes, all type aliases are completely stripped away from the final JavaScript code.
