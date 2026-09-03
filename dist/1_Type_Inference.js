/*
->Type Inference:
    Type inference is the TypeScript compiler's ability to automatically determine and assign data types to variables, expressions, and function return values.
    This happens during compilation when you do not provide explicit type annotations, allowing you to write less code while still maintaining full type safety.
*/
let inferredString = "this is the string"; //here inferredString will accept value of string, if you hover on it you will see: inferredString:string
// inferredString=55 // error
let myNum = 6655;
// myNum={a:"1"} // error as myNum will only accept numbers as it's first value is number
myNum = 1234; // works fine
let username = "Alex"; // Inferred as 'string'
let IsActive = true; // Inferred as 'boolean'
let numbers = [1, 2, 3]; // Inferred as number[]
let mixed = [1, "apple", true]; // Inferred as (string | number | boolean)[]
function add(a, b) {
    return a + b; // Inferred return type is 'number'
}
export {};
//if you hover over 'add' you will see this: function add(a: number, b: number): number
