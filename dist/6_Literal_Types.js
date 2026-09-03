/*
->What are literal Types:
    In programming, a literal is a fixed value written directly into the source code. Most programming languages feature common literal types
    like numeric, string, boolean, character, and null values
*/
let playerMove;
playerMove = "north"; // Valid
// playerMove = "up";    // Error: Type '"up"' is not assignable to type 'Direction'
let branch;
//function roll will return only values between 1 to 6 as defined in type DiceRoll
function roll() {
    return 4; // Valid 
    // return 7; // Error: Type '7' is not assignable to type 'DiceRoll' 
}
let apiResult = {
    status: "success", // can be either success or error,
    data: "Your api is running",
    // message:"Api call failed" 
    //error as status is success, it expects data to be used and if you use message then it will throuw error, as goes if status is error then using data will through error
};
export {};
