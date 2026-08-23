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

//Note type can be like this also:
type multiple="meString" | true | 6655; // this type is having multiple types
let test:multiple=true; //works
// test=false; //error

function printId(id: string | number) {
  console.log(`Your ID is: ${id}`);
}

printId(101);     // Valid
printId("A101");  // Valid
// printId(true); //error


//2-> Intersection Types (AND):
interface Colorful{
    color:string;
}
interface Circle{
    radius:Number; // or number
}
//now we want both these interfaces to be present in the type
type ColorfulCircle=Colorful & Circle;
let myCirlce:ColorfulCircle={
    color:"Blue",
    radius:50,
    //if either color or radius is missing it's gonna through an error
}

type Person={name:string}
type UserId={userId:number}
type Staff=Person & UserId;
const newStaff: Staff = {
  name: "Ishfaq",
  userId: 4412
};