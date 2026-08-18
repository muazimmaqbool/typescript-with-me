//Primitive types:
let userName: string = "Muazim Maqbool"; // string type
let enroll: number = 6655; // number
let isAdmin: boolean = true; // for boolean value

//Array:
let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
// let numbers:number[]=[1,2,3,4,5,"as"] // this will throw error as string value can't be inside array of number

let names: string[] = ["user1", "user2", "user3"]; // array of strings
// let names:string[]=["user1","user2","user3",12] // this will throw error as number value can't be inside array of strings

//Tuples:
/*a tuple is a specialized type of array with a fixed length and predefined types for each index position,
 while standard JavaScript arrays can hold any mix of elements of any length, TypeScript tuples enforce the exact data type and specific sequence of your data.
*/
let student: [string, number] = ["Muazim", 6655]; // this will contain two values one string and then number
// now if you do like this: ["Muazim","6655"] i.e both string values it will throw error

let point: [number, number] = [10, 20];
//console.log(point[2]); // Error: Tuple type '[number, number]' of length '2' has no element at index '2'.

let response: [string, number];
response = ["Success", 200]; // OK
//response = [404, "Not Found"]; // Error: Type 'number' is not assignable to type 'string'.

//Note: You can easily unpack the values of a tuple using standard JavaScript destructuring:
let coordinates: [number, number] = [40.7128, -74.006];
const [latitude, longitude] = coordinates;

//an enum (short for enumeration) is a special data type that allows you to define a set of named constants.
//Enum:
enum Color {
  Blue,
  Black,
  White,
  Red,
  Yello,
  Orange,
}
let favoriteColor: Color = Color.White;

//Number Enums:
enum StatusCodes {
  Success = 200,
  BadRequest = 400,
  Unauthorized, // 401
  ServerError = 500,
}

//String Enums:
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  User = "USER"
}
const role:UserRole=UserRole.Admin

//Const Enums:
const enum CompactDirection {
  Up = "UP",
  Down = "DOWN"
}