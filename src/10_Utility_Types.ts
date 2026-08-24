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