//These are some of the more advance features of typescript:

interface Todo {
  title: string;
  description?: string;
  completed: boolean;
  createdAt?: Date;
  assignedTo: string;
}

// 1: Partial : makes all the fields/properties as optional
type partialTodo = Partial<Todo>;
//now if you hover on the partialTodo you can see all of the fields of TODO interface have become optional
let test: partialTodo = {
  title: "Todo",
};

// let test2:Todo={
//     title:"Todo one"
// } //error

// ---------------------------------------------------------------------------------------

// 2: Required - makes all the properties as required
type RequiredTodo = Required<Todo>;
//now if you hover on it you will see all fields are now required
let test3: RequiredTodo = {
  title: "abc",
  completed: true,
  assignedTo: "user1",
  description: "asdfga",
  createdAt: new Date(),
};
//error if you don't provide descrption and createdAt

// let test3:Todo={
//     title:"abc",
//     completed:true,
//     assignedTo:"user1"
// } // works fine

// ---------------------------------------------------------------------------------------

// 3: Readonly - makes all properties readonly
type ReadonlyTodo = Readonly<Todo>;
let myTodo: ReadonlyTodo = {
  title: "Learn TypeScript",
  description: "Complete tutorial",
  completed: false,
  createdAt: new Date(),
  assignedTo: "Muazim",
};
// myTodo.completed = true; //works fine if you have done this : let myTodo: Todo = {....}

// myTodo.completed=true; //error when used like this: let myTodo: ReadonlyTodo = {...}

// ---------------------------------------------------------------------------------------

// 4: Pick : pick specific properties
//suppose you want to make another todo with only with title and completed:
//one way:
// type todoNew={
//   title:string,
//   completed:boolean
// }

//another way we can pick just two prot=perties from Todo interface:
type NewTodo = Pick<Todo, "title" | "completed">;
//now when you hover over NewTodo you will see it has two properties only title and completed
let todo2: NewTodo = {
  title: "tasknew",
  completed: true,
};

// ---------------------------------------------------------------------------------------

// 5: Omit : omit specific properties
//it's opposite of pick, here you want to create another todo but same Properties as Todo interface but without createdAt property
type TodoUpdated = Omit<Todo, "createdAt">; // or type TodoUpdated=Omit<Todo,"createdAt" | "title">
//now hover over TodoUpdated

// ---------------------------------------------------------------------------------------

//this is one of the coolest feature of typescript
// 6: Record : Record<Keys, Type> is a built-in utility type used to map the properties of an object to a specific data type.
//    It allows you to quickly create an object type with predefined key types and value types

type PageInfo = {
  title: string;
  url: string;
};
type Pages = "home" | "about" | "contact";

//now i want to merge these two i.e PageInfo and Pages into one single type so that Pages becomes keys and PageInfo as the value of each key
type Merged = Record<Pages, PageInfo>;
//Now when you hover over Merged you will see like this:
                                                        // type merged = {
                                                        //     home: PageInfo;
                                                        //     about: PageInfo;
                                                        //     contact: PageInfo;
                                                        // }
let pages: Merged = {
  home: {
    title: "Home",
    url: "/",
  },
  about: {
    title: "About",
    url: "/about",
  },
  contact: {
    title: "Contact",
    url: "/contact",
  },
};

// ---------------------------------------------------------------------------------------

// 7: ReturnType ; get return type of the function
//ReturnType<Type> is a built-in utility type that extracts and constructs a new type from the return value of a function type
function createUser(){
    return{
        id:1,
        name:"Basit",
        email:"basit51@gmail.com"
    }
}
//now we want to know what this function return maybe we can use it somewhere else
type UserType=ReturnType<typeof createUser>
//now when you over on UserType you will something like this:
                                                            // type UserType = {
                                                            //     id: number;
                                                            //     name: string;
                                                            //     email: string;
                                                            //  }
let userNew:UserType={
    id:123,
    name:"abc",
    email:"abc@gmail.com"
}
