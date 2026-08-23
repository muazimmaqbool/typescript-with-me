/*
->Type Assertions and Type Guards:
    Type Assertions and Type Guards are two different mechanisms in TypeScript used to handle and refine variable types. 
    ->The core difference is that Type Assertions are compile-time overrides where you tell the compiler to trust your judgment, 
    ->while Type Guards are runtime checks that safely narrow down types within a block of code
*/

//1. Type Assertions (as Keyword):
    /* A Type Assertion tells TypeScript, "Trust me, I know what I'm doing, treat this variable as this specific type.
       It performs no runtime validation or data conversion.
       ->Common Use Cases:
            Fetching elements from the DOM where you know the exact element type.
            Working with an API response typed as any or unknown.
    */
//Example:
    // 1. Using the 'as' syntax (Recommended, works in React TSX)
    const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

    // 2. Using angle-bracket syntax (Cannot be used in React TSX)
    const rawData: unknown = "Hello World";
    const strLength = (<string>rawData).length; 


//2. Type Guards (Runtime Narrowing):
        /* A Type Guard is an expression or function that performs a literal check on a value at runtime. 
           Once the check passes, TypeScript automatically narrows down the type inside that conditional block
        */