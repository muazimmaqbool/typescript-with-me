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
