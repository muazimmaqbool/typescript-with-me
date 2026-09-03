/*
->Union Types and Intersection Types:
    union types (|) represent an "OR" relationship, allowing a value to be one of several types,
    while intersection types (&) represent an "AND" relationship, merging multiple types into a single type that must satisfy all of them
*/
// let response:status="loading";//error
let response = "approved"; //works
// response="failed"; //error
function getStatus(status) {
    // now this function can take arguments which are defined in status type
    console.log("Showing result status:", status);
}
getStatus("pending"); //works
function getInfo(branch) {
    // now this function can take arguments which are defined in Branch type
    console.log("Showing resultinformation of branch:", branch);
}
let test = true; //works
// test=false; //error
function printId(id) {
    console.log(`Your ID is: ${id}`);
}
printId(101); // Valid
printId("A101"); // Valid
let myCirlce = {
    color: "Blue",
    radius: 50,
    //if either color or radius is missing it's gonna through an error
};
const newStaff = {
    name: "Ishfaq",
    userId: 4412,
};
export {};
