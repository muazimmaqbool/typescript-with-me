//These are some of the more advance features of typescript:
//now if you hover on the partialTodo you can see all of the fields of TODO interface have become optional
let test = {
    title: "Todo",
};
//now if you hover on it you will see all fields are now required
let test3 = {
    title: "abc",
    completed: true,
    assignedTo: "user1",
    description: "asdfga",
    createdAt: new Date(),
};
let myTodo = {
    title: "Learn TypeScript",
    description: "Complete tutorial",
    completed: false,
    createdAt: new Date(),
    assignedTo: "Muazim",
};
//now when you hover over NewTodo you will see it has two properties only title and completed
let todo2 = {
    title: "tasknew",
    completed: true,
};
//Now when you hover over Merged you will see like this:
// type merged = {
//     home: PageInfo;
//     about: PageInfo;
//     contact: PageInfo;
// }
let pages = {
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
function createUser() {
    return {
        id: 1,
        name: "Basit",
        email: "basit51@gmail.com"
    };
}
//now when you over on UserType you will something like this:
// type UserType = {
//     id: number;
//     name: string;
//     email: string;
//  }
let userNew = {
    id: 123,
    name: "abc",
    email: "abc@gmail.com"
};
export {};
