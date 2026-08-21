/*
->Type Alias:
    A type alias in TypeScript allows you to create a custom name for any existing type. 
    It acts as a shortcut or a blueprint, making your code cleaner, easier to read, and reusable. 
    You declare it using the type keyword followed by an assignment operator (=)
*/
// 1. Primitive Alias (acts as documentation)
type userName= string;
type userId=string | number;  // (Note: | is called union and will be discussed later)

let name:userName="muazim@6655"
// name=123456 //error

// let userId=1223 // works fine
// let userId:userId=true //error as userId will accept string or numbers only
let userId:userId="abc123" // works
// userId=false // error
userId=6655 // works fine

// 2. Object Type Alias
type User = {
  id: number;
  name: string;
  isAdmin: boolean;
};
//using it
const currentUser: User = {
  id: 101,
  name: "Alice",
  isAdmin: true, // sAdmin: "true" -> error
};

// 3. Union Type Alias (highly common)
type Status = "pending" | "approved" | "rejected";

//using it:
function updateStatus(current: Status): void {
  console.log(`Status is ${current}`);
}
updateStatus("pending")//works
// updateStatus("new") // error as updateStatus function can accept only Status values

// 4. Function Type Alias
type Greet = (name: string) => string;

// The function follows the Greet type: name → string and return value → string
const greetUser: Greet = (name) => {
  return `Hi, ${name}!`;
};

console.log(greetUser("Muazim"));
// console.log(greetUser(123)) // error