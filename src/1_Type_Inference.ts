/*
->Type Inference:
    Type inference is the TypeScript compiler's ability to automatically determine and assign data types to variables, expressions, and function return values. 
    This happens during compilation when you do not provide explicit type annotations, allowing you to write less code while still maintaining full type safety.
*/

let inferredString="this is the string"; //here inferredString will accept value of string, if you hover on it you will see: inferredString:string
// inferredString=55 // error

let myNum=6655;
// myNum={a:"1"} // error as myNum will only accept numbers as it's first value is number

let username = "Alex"; // Inferred as 'string'
let IsActive = true;   // Inferred as 'boolean'

//age = "thirty";        // Error: Type 'string' is not assignable to type 'number'