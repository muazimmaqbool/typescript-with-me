let name = "muazim@6655";
// name=123456 //error
// let userId:userId=true //error as userId will accept string or numbers only
let userId = "abc123"; // works
// userId=false // error
userId = 6655; // works fine
//using it
const currentUser = {
    id: 101,
    name: "Alice",
    isAdmin: true, // isAdmin: "true" -> error
    // role:"SuperAdmin" //Works fine as role is nor required it's optional
};
//using it:
function updateStatus(current) {
    console.log(`Status is ${current}`);
}
updateStatus("pending"); // works
// The function follows the Greet type: name → string and return value → string
const greetUser = (name) => {
    return `Hi, ${name}!`;
    // return 1234; // error
};
console.log(greetUser("Muazim"));
const addNumbers = (a, b) => {
    return a + b;
    // return `${a+b}` // error as addNumbers returns only number
};
console.log(addNumbers(10, 20));
//now this myCar object can take both name and carModal as modal interface extends Car properties
let myCar = {
    name: "BMW M5",
    carModal: "2026 xtm5"
};
//as these two interfaces are having same name which results in one interface having both name and type
let myBike = {
    name: "BMW GS 1250",
    type: "Sports + Offroad"
};
export {};
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
