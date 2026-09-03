//void: used for functions that do not return anything
function study(message) {
    console.log(message);
    //return 6 // will throw error as ts expects it to not return anything as it's void
}
study("test"); //works
// study(123) //error as study function only accepts string values
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
//-> Optional parameter :
// (means making an parameter of the function as optional i.e it's not required) Just add ? after the paramter like this: message?:string to make it optional
function greet(name, message) {
    //on message parameter is having ? which makes it optional;
    if (message) {
        return `Hello, ${name}. we have a ${message} for you`;
    }
    return `Hello, ${name}`;
}
console.log(greet("Muazim"));
console.log(greet("Muazim", "Join call at 9:30 AM"));
// console.log(greet()) //error
//-> Default paramter:
// Means an paramter will have default value and can use that if not provided
function multiple(a, b = 5) {
    //when b is not passed it will use it's default value which is 5
    return a * b;
}
console.log(multiple(10)); // 50
console.log(multiple(2, 3)); // 6
//-> Rest paramter:
// it will take any number of paramters and that will be inside array
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0);
}
//-> Arrow functions
const divide = (a, b) => a / b;
export {};
