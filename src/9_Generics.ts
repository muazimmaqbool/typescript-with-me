/*
Important:
-> Generics in typescript:
    Generics in TypeScript are toolsets for creating reusable code components that can work over a variety of data types rather than a single one. 
    They act like variables for types, allowing you to pass types as arguments into functions, interfaces, type aliases, and classes.

    Instead of freezing a specific type (like string or number) or resorting to type-safety killers like any, 
    generics use a placeholder—conventionally <T>—which gets dynamically defined when the code is executed
*/
//Example 1:
function functionOne(arg:any){
    return arg;
}
const output1=functionOne("typescript");
const output2=functionOne(1234)
//if you hover over the output1 and output2 you will notice typescript doesn't know what type the function return so outputs will be of any type
//Now let's use generics

function myFunction<myType>(arg:myType):myType{
    return arg;
}
let one=myFunction("this is string");
let two=myFunction(3210) // or let two =myFunction<number>(1235)
//now when you hover on the outputs one and two you will see the proper return type also

//you can also provide explicitly here the type you want in return
let three=myFunction<boolean>(true)