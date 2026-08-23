//Now let's see how do you give types to objects in typescript:
//One method (messy):
let student = {
    name: "Muazim",
    enroll: 6655, // enroll:"6655" will throw error
};
let user = {
    name: "Muazim",
    enroll: 6655, //enroll:"6655" will throw error
    isPresent: true,
    //email:"muazim@gmail.com" // removing this won't throw error
    id: 16206655, // this can't be updated it will throw error, see by trying this user.id=6655
};
let laptop = {
    name: "Macbook pro",
    price: 200000,
    getDiscount(percentage) {
        return this.price * (percentage / 100);
    },
    getFinalPrice(discount) {
        return this.price - discount;
    }
};
const discountPrice = laptop.getDiscount(15);
console.log("discountPrice:", discountPrice); // it will return discount amount:
/*
Original Price = ₹200,000
Discount = 15%

Discount Amount = ₹30,000

Final Price = ₹200,000 - ₹30,000
            = ₹170,000
*/
console.log("final Price after discount:", laptop.getFinalPrice(discountPrice));
export {};
