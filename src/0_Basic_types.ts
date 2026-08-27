//Primitive types:
let userName: string = "Muazim Maqbool"; // string type
let enroll: number = 6655; // number
let isAdmin: boolean = true; // for boolean value
// isAdmin="true" //error

//Array:
let numbers: number[] = [1, 2, 3, 4, 5]; // array of numbers
// let numbers:number[]=[1,2,3,4,5,"as"] // this will throw error as string value can't be inside array of numbers

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

//Any and Unknow:
//Now their will be situation when you don't know what type to use (that case will be very rear), in that case you can use Any or Unknow
//Unknow is considered more safer to use

//'any' completely disables type-checking while 'unknown' enforces strict type-safety

//any examples:
let randomValue:any="React";
randomValue=123;
randomValue=true;
// console.log(randomValue);

//unknown examples:
let value:unknown;
value=5;
value="Node";

//functions basic example:

//void: used for functions that do not return anything
function study(message:string):void{
    console.log(message);
    // return 6 // will throw error as ts expects it to not return anything as it's void
}
function hey():string{
    return "Hello";
    //return 123; // will throw error as it expects to return string 
}
function height(num:number):number{
    const totalHeight:number=50+num;
    return totalHeight; // returns number
}

//Null and undefined in ts:
let nullValue:null=null;
let undefinedValue:undefined=undefined;
// let undefinedValue:undefined=null; //will throw error
// let undefinedValue:undefined="value"; //will throw error