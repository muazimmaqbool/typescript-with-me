//void: used for functions that do not return anything
function study(message) {
    console.log(message);
    //return 6 // will throw error as ts expects it to not return anything as it's void
}
function hey() {
    return "Hello";
    //return 123; // will throw error as it expects to return string 
}
function height(num) {
    const totalHeight = 50 + num;
    return totalHeight; // returns number
}
//basic add function
function add(a, b) {
    return a + b;
}
//optional parameter (means making an parameter of the function as optional i.e it's not required) Just add ? after the paramter like this: message?:string to make it optional
function greet(name, message) {
    //on message parameter is have added ? which makes it optional;
    if (message) {
        return `Hello, ${name}. we have a ${message} for you`;
    }
    return `Hello, ${name}`;
}
console.log(greet("Muazim"));
console.log(greet("Muazim", "Join call at 9:30 AM"));
export {};
