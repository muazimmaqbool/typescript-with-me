//Union Types and Intersection Types:
// union types (|) represent an "OR" relationship, allowing a value to be one of several types, 
// while intersection types (&) represent an "AND" relationship, merging multiple types into a single type that must satisfy all of them

//1-> Union Types (OR):
type status="pending" | "approved" | "rejected"; // the status can take only three values i.e one of the three values
// let response:status="loading";//error
let response:status="approved";//works
// response="failed"; //error 

//2-> Intersection Types (AND):