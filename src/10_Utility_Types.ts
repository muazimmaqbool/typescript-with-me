//These are some of the more advance features of typescript:

interface Todo{
    title:string;
    description?:string;
    completed:boolean;
    crearedAt?:Date;
    assignedTo:string;
}

// 1: Partial : makes all the fields/properties as optional
type partialTodo=Partial<Todo>; 
//now if you hover on the partialTodo you can see all of the fields of TODO interface have become optional
let test:partialTodo={
    title:"Todo"
}

// let test2:Todo={
//     title:"Todo one"
// } //error

// 2: Required - makes all the properties as required
type RequiredTodo=Required<Todo>;
//now if you hover on it you will see all fields are now required
let test3:RequiredTodo={
    title:"abc",
    completed:true,
    assignedTo:"user1",
    description:"asdfga",
    crearedAt:new Date()
}
//error if you don't provide descrption and createdAt

// let test3:Todo={
//     title:"abc",
//     completed:true,
//     assignedTo:"user1"
// } // works fine