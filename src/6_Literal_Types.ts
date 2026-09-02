/*
->What are literal Types:
    In programming, a literal is a fixed value written directly into the source code. Most programming languages feature common literal types 
    like numeric, string, boolean, character, and null values
*/

//1. String Literal Types:
type Direction = "north" | "south" | "east" | "west";

let playerMove: Direction;
playerMove = "north"; // Valid
// playerMove = "up";    // Error: Type '"up"' is not assignable to type 'Direction'

let branch: "CSE" | "Civil" |  "Mechanical" | "Electrical" | "E & C";
// branch="CSE" //valid
// branch="robotics" //error

//2. Numeric Literal Types:
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

//function roll will return only values between 1 to 6 as defined in type DiceRoll
function roll(): DiceRoll {
    return 4; // Valid 
    // return 7; // Error: Type '7' is not assignable to type 'DiceRoll' 
}

//Combining with other types:
type SuccessResponse={
    status:"success";
    data:any;
}
type ErrorResponse={
    status:"error";
    message:string;
}
type APIresponse=SuccessResponse | ErrorResponse;
let apiResult:APIresponse={
    status:"success", // can be either success or error,
    data:"Your api is running",
    // message:"Api call failed" 
    //error as status is success, it expects data to be used and if you use message then it will throuw error, as goes if status is error then using data will through error
}
