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
}

let user: User = {
  name: "Muazim",
  enroll: 6655, //enroll:"6655" will throw error
  isPresent: true,
};
