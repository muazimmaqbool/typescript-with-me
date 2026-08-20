//Primitive types:
let userName = "Muazim Maqbool"; // string type
let enroll = 6655; // number
let isAdmin = true; // for boolean value
//Array:
let numbers = [1, 2, 3, 4, 5]; // array of numbers
// let numbers:number[]=[1,2,3,4,5,"as"] // this will throw error as string value can't be inside array of number
let names = ["user1", "user2", "user3"]; // array of strings
// let names:string[]=["user1","user2","user3",12] // this will throw error as number value can't be inside array of strings
//Tuples:
/*a tuple is a specialized type of array with a fixed length and predefined types for each index position,
 while standard JavaScript arrays can hold any mix of elements of any length, TypeScript tuples enforce the exact data type and specific sequence of your data.
*/
let student = ["Muazim", 6655]; // this will contain two values one string and then number
// now if you do like this: ["Muazim","6655"] i.e both string values it will throw error
let point = [10, 20];
//console.log(point[2]); // Error: Tuple type '[number, number]' of length '2' has no element at index '2'.
let response;
response = ["Success", 200]; // OK
//response = [404, "Not Found"]; // Error: Type 'number' is not assignable to type 'string'.
//Note: You can easily unpack the values of a tuple using standard JavaScript destructuring:
let coordinates = [40.7128, -74.006];
const [latitude, longitude] = coordinates;
//an enum (short for enumeration) is a special data type that allows you to define a set of named constants.
//Enum:
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Black"] = 1] = "Black";
    Color[Color["White"] = 2] = "White";
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Yello"] = 4] = "Yello";
    Color[Color["Orange"] = 5] = "Orange";
})(Color || (Color = {}));
let favoriteColor = Color.White;
//Number Enums:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["ServerError"] = 500] = "ServerError";
})(StatusCodes || (StatusCodes = {}));
//String Enums:
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["User"] = "USER";
})(UserRole || (UserRole = {}));
const role = UserRole.Admin;
//Const Enums:
var CompactDirection;
(function (CompactDirection) {
    CompactDirection["Up"] = "UP";
    CompactDirection["Down"] = "DOWN";
})(CompactDirection || (CompactDirection = {}));
//Any and Unknow:
//Now their will be situation when you don't know what type to use (that case will be very rear), in that case you can use Any or Unknow
//Unknow is considered more safer to use
//'any' completely disables type-checking while 'unknown' enforces strict type-safety
//any examples:
let randomValue = "React";
randomValue = 123;
randomValue = true;
// console.log(randomValue);
//unknown examples:
let value;
value = 5;
value = "Node";
//functions basic example:
//void: used for functions that do not return anything
function study(message) {
    console.log(message);
    // return 6 // will throw error as ts expects it to not return anything as it's void
}
function hey() {
    return "Hello";
    //return 123; // will throw error as it expects to return string 
}
function height(num) {
    const totalHeight = 50 + num;
    return totalHeight; // returns number
}
//Null and undefined in ts:
let nullValue = null;
export {};
// let undefinedValue:undefined=undefined;
// let undefinedValue:undefined=null; //will throw error
// let undefinedValue:undefined="value"; //will throw error
