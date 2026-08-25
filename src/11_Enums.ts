/*
->Enums in typescript:
    An enum (short for enumeration) in TypeScript is a special data type that allows you to define a set of named constants. 
    Unlike most TypeScript features which disappear during compilation, enums are a runtime extension that compiles down into a real JavaScript object. 
    They make your code more readable, maintainable, and type-safe by eliminating "magic strings" or arbitrary numbers
*/
//Examples:

enum Direction {
  Up, //0 
  Down,  //1
  Left,  //2
  Right  //3
}
//dir variable can only take values mentioned insinde Direction enum
let dir:Direction=Direction.Right //works
//when you hover over .Right you will see something like this: (enum member) Direction.Right = 3 i.e Right is at number 3, as Up = 0
//and if you  assign up=1 then right=4 and up=1
//and this up i.e first value is called initializer

// dir="north" //error

// You can also change the starting index:
enum locations {
  North = 1,   //1
  South,      // 2
  Center       // 3
}

//string enum
enum Status{
    Pending="PENDING",
    Approved="APPROVED",
    Rejected="REJECTED"
}
let stat:Status=Status.Approved;

//Important: const enums (more performant)
const enum HttpStatus{
    OK=200,
    BadRequest=400,
    Unauthorized=401,
    NotFound=404
}

function handleResponse(status:HttpStatus):void{
    if(status===HttpStatus.OK){
        console.log("Success!")
    }
}