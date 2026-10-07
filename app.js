// 1. Basic Data Types
let userName = "Sufiyan";
let age = 21;
let isStudent = true;
console.log(userName);
console.log(age);
console.log(isStudent);
// 2. Undefined and Null
let address;
let userData = null;
console.log(address);
console.log(userData);
// 3. Arrays
let fruits = ["Apple", "Mango", "Banana"];
let marks = [70, 85, 90];
let mixedValues = ["Sufiyan", 21, "arham", 45];
console.log(fruits);
console.log(marks);
console.log(mixedValues);
// 4. Tuples
let studentInfo = [
    "Sufiyan",
    21,
    true
];
console.log(studentInfo);
// 5. Enums
var UserRole;
(function (UserRole) {
    UserRole["User"] = "User";
    UserRole["Admin"] = "Admin";
    UserRole["Manager"] = "Manager";
})(UserRole || (UserRole = {}));
console.log(UserRole.Admin);
var ResponseStatus;
(function (ResponseStatus) {
    ResponseStatus[ResponseStatus["Success"] = 200] = "Success";
    ResponseStatus[ResponseStatus["Created"] = 201] = "Created";
    ResponseStatus[ResponseStatus["NotFound"] = 404] = "NotFound";
})(ResponseStatus || (ResponseStatus = {}));
console.log(ResponseStatus.Success);
// 6. Unknown Type
let data;
data = "Hello TypeScript";
// 7. Type Narrowing
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
data = 500;
if (typeof data === "number") {
    console.log(data.toFixed());
}
data = true;
if (typeof data === "boolean") {
    console.log(data);
}
// 8. Functions 
const calculateTotal = () => {
    let price = 500;
    let quantity = 2;
    return price * quantity;
};
console.log(calculateTotal());
// 9. Type Safety
let productName = "Laptop";
let productPrice = 85000;
console.log(productName);
console.log(productPrice);
// 10. Type Checking with if
let score = 75;
if (score > 50) {
    score = 100;
}
console.log(score);
// 11. Union Types
let productId = 101;
productId = "P-101";
console.log(productId);
const student = {
    name: "Sufiyan",
    age: 21,
    email: "sufiyan@example.com"
};
console.log(student);
const adminUser = {
    email: "admin@example.com",
    password: "123456",
    isAdmin: true
};
console.log(adminUser);
const profile = {
    name: "Arham",
    age: 22,
    city: "Karachi"
};
console.log(profile);
let myValue = "Hello";
myValue = 100;
myValue = true;
console.log(myValue);
let userId = 123;
userId = "USER-123";
console.log(userId);
const completeUser = {
    name: "Sufiyan",
    age: 21,
    email: "sufiyan@example.com"
};
console.log(completeUser);
function showProduct(product) {
    console.log(product.name);
    console.log(product.price);
}
showProduct({
    name: "Keyboard",
    price: 2500
});
// 19. Class
class ProductItem {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let product1 = new ProductItem("Keyboard", 2500);
let product2 = new ProductItem("Mouse", 1500);
console.log(product1);
console.log(product2);
export {};
