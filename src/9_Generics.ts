/*
Important:
-> Generics in typescript:
    Generics in TypeScript are toolsets for creating reusable code components that can work over a variety of data types rather than a single one. 
    They act like variables for types, allowing you to pass types as arguments into functions, interfaces, type aliases, and classes.

    Instead of freezing a specific type (like string or number) or resorting to type-safety killers like any, 
    generics use a placeholder conventionally <T> which gets dynamically defined when the code is executed
*/
//Example 1:
function functionOne(arg: any) {
  return arg;
}
const output1 = functionOne("typescript");
const output2 = functionOne(1234);
//if you hover over the output1 and output2 you will notice typescript doesn't know what type the function return so outputs will be of 'any' type
//Now let's use generics

function myFunction<myType>(arg: myType): myType {
  return arg;
}
let one = myFunction("this is string"); //Recommended
let two = myFunction(3210); // or let two =myFunction<number>(1235)
//now when you hover on the outputs one and two you will see the proper return type also

//you can also provide explicitly here the type you want in return
let three = myFunction<boolean>(true);

//Note (important): i have used generic as <myType> but generally <T> is used although it can be any name

//Example 2: generic with arrays
function getFirst<T>(arr: T[]): T | undefined {
  // :T | undefined means: it can return either type T or undefined
  return arr[0];
}
let myNum=getFirst([1,2,3])
let item=getFirst(["abc","def","ghi"]) // defining type is optional: let item=getFirst<string>(["abc","def","ghi"])
//now when you hover over myNum and item you will see also returned type also with | undefined

//Example 3: Generic with interfaces
interface KeyValuePair<K,V>{
    key:K,
    value:V,
}
let stringNumberPair:KeyValuePair<String,Number>={
    key:"id",
    value:6655
}
//the above one is simple generic with interface but generic with interfaces can go complex:
 interface User<K,V>{
    key:K,
    value:{
        name:string,
        id:number
    },
}
let userInfo:User<String,Number>={
    key:"id",
    value:{
        name:"hashim",
        id:123456
    }
}   

//another example:
interface ApiResponse<DataPayload> {
    status: number;
    errors: string[] | null;
    data: DataPayload; // This structure changes based on what you request
}

interface UserNew { name: string; id: number; }
interface Product { title: string; price: number; }

// Easily reuse the exact same interface layout for completely unique payloads
const userResponse: ApiResponse<UserNew> = {
    status: 200,
    errors: null,
    data: { name: "Alice", id: 101 }
};

//Example 3: Generic Constraints (generic can extend interface):
//By default, a generic variable can represent any type. You can restrict what types are acceptable by using the extends keyword to declare constraints.
interface LengthWise{
    length:number;
}
function getLength<T extends LengthWise>(arg:T):T{
    console.log("Length foundL",arg.length)
    return arg
}

getLength("Hello") //works
getLength([1,2,3]) //works

//Example 4: Generic with classes:
class StorageBox<T> {
    private contents: T;
    constructor(value: T) { this.contents = value; }
    
    getContents(): T { return this.contents; }
}

const secureString = new StorageBox<string>("SecretPassphrase");


//Example 5: Multiple Type Parameters:
function mergePairs<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

const productPair = mergePairs("ItemID", 9553);

//Example 6: Default Generic Values:
//Just like normal JavaScript default function arguments, you can provide a fallback default type.
// If no type argument is provided, T defaults to a string
interface ElementWrapper<T = string> {
    element: T;
}

/*
->Benefits of Using Generics:
    - Strict Type Safety: Preserves clear type relationships across inputs, internal logic, and outputs.
    - Elimination of Duplication: Author a single dynamic block of code instead of copy-pasting code definitions for dozens of unique data states.
    - Predictable Autocomplete: IDE extensions read inferred types to continuously populate highly accurate intellisense code hints as you code.
*/