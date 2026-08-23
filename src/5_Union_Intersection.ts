//Union Types and Intersection Types:
// union types (|) represent an "OR" relationship, allowing a value to be one of several types, 
// while intersection types (&) represent an "AND" relationship, merging multiple types into a single type that must satisfy all of them

//1-> Union Types (OR):
type status="pending" | "approved" | "rejected"; // the status can take only three values i.e one of the three values
// let response:status="loading";//error
let response:status="approved";//works
// response="failed"; //error 

type Branch="CSE" | "Civil" |  "Mechanical" | "Electrical" | "E & C";
function getInfo(branch:Branch){ // now this function can take arguments which are defined in Branch type
    console.log("Showing resultinformation of branch:",branch)
}
// getInfo("CSE") //works
// getInfo("Robotics") //error

//2-> Intersection Types (AND):