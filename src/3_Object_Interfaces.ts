//Now let's see how do you give types to objects in typescript:

//One method (messy):
let student: { name: string; enroll: number } = {
  name: "Muazim",
  enroll: 6655, // enroll:"6655" will throw error
};

//Important better way is to define interface:
interface User {
  name: string;
  enroll: number;
  isPresent: boolean;
  //extra:
  email?:string; //now required, it's optional, if email is not optional and then not provided in user object it will throw error in user object, try by removing ? on email
  readonly id:number; // it's readonly
}

let user: User = {
  name: "Muazim",
  enroll: 6655, //enroll:"6655" will throw error
  isPresent: true,
  //email:"muazim@gmail.com" // removing this won't throw error
  id:16206655, // this can't be updated it will throw error, see by trying this user.id=6655
}
// user.id=6655; //error as id is readonly
/*
->An interface in TypeScript is a powerful contract that defines the exact structural "shape" an object must follow. 
 It enforces compile-time type-checking by establishing a blueprint for properties and methods without providing their actual implementation code
*/
//More
