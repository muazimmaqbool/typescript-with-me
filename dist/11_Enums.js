/*
->Enums in typescript:
    An enum (short for enumeration) in TypeScript is a special data type that allows you to define a set of named constants.
    Unlike most TypeScript features which disappear during compilation, enums are a runtime extension that compiles down into a real JavaScript object.
    They make your code more readable, maintainable, and type-safe by eliminating "magic strings" or arbitrary numbers
*/
//Examples:
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; //3
})(Direction || (Direction = {}));
//dir variable can only take values mentioned insinde Direction enum
let dir = Direction.Right; //works
//when you hover over .Right you will see something like this: (enum member) Direction.Right = 3 i.e Right is at number 3, as Up = 0
//and if you  assign up=1 then right=4 and up=1
//and this up i.e first value is called initializer
// dir="north" //error
// You can also change the starting index:
var locations;
(function (locations) {
    locations[locations["North"] = 1] = "North";
    locations[locations["South"] = 2] = "South";
    locations[locations["Center"] = 3] = "Center"; // 3
})(locations || (locations = {}));
//string enum
var Status;
(function (Status) {
    Status["Pending"] = "PENDING";
    Status["Approved"] = "APPROVED";
    Status["Rejected"] = "REJECTED";
})(Status || (Status = {}));
let stat = Status.Approved;
//Important: const enums (more performant)
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["BadRequest"] = 400] = "BadRequest";
    HttpStatus[HttpStatus["Unauthorized"] = 401] = "Unauthorized";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
})(HttpStatus || (HttpStatus = {}));
function handleResponse(status) {
    if (status === HttpStatus.OK) {
        console.log("Success!");
    }
}
//Important:
//Heterogeneous Enums:
//You can mix string and numeric values within the same enum, though this practice is generally discouraged.
var Mixed;
(function (Mixed) {
    Mixed[Mixed["No"] = 0] = "No";
    Mixed["Yes"] = "YES";
})(Mixed || (Mixed = {}));
let test = Mixed.No; //working
export {};
