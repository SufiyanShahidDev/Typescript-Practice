"use strict";
// Basic Data Types
let userName = "Sufiyan";
let age = 21;
let isStudent = true;
console.log(userName);
console.log(age);
console.log(isStudent);
// Undefined and Null
let address;
let userData = null;
console.log(address);
console.log(userData);
// Arrays
let fruits = ["Apple", "Mango", "Banana"];
let marks = [70, 85, 90];
let mixedValues = ["Sufiyan", 21, "arham", 45];
console.log(fruits);
console.log(marks);
console.log(mixedValues);
// Tuples
let studentInfo = [
    "Arham",
    21,
    true
];
console.log(studentInfo);
// Enums
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
// Unknown Type
let data;
data = "Hello World";
// Type Narrowing
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
// Functions 
const calculateTotal = () => {
    let price = 500;
    let quantity = 2;
    return price * quantity;
};
console.log(calculateTotal());
// Type Safety
let productName = "Laptop";
let productPrice = 85000;
console.log(productName);
console.log(productPrice);
// Type Checking with if
let score = 75;
if (score > 50) {
    score = 100;
}
console.log(score);
// Union Types
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
// Function with Interface
// interface Product {
//     name: string;
//     price: number;
// }
// function showProduct(product: Product): void {
//     console.log(product.name);
//     console.log(product.price);
// }
// showProduct({
//     name: "Keyboard",
//     price: 2500
// });
// Class
// class ProductItem {
//     constructor(
//         public name: string,
//         public price: number
//     ) {}
// }
// let product1 = new ProductItem("Keyboard", 2500);
// let product2 = new ProductItem("Mouse", 1500);
// console.log(product1);
// console.log(product2);
// Classes and Objects
class Mobile {
    brand;
    price;
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
let mobile1 = new Mobile("Samsung", 45000);
let mobile2 = new Mobile("Infinix", 35000);
console.log(mobile1);
console.log(mobile2);
// Constructors
class Student {
    name;
    age;
    email;
    constructor(n, a, e) {
        this.name = n;
        this.age = a;
        this.email = e;
    }
}
let student1 = new Student("Ali", 19, "ali@gmail.com");
let student2 = new Student("Ahmed", 21, "ahmed@gmail.com");
console.log(student1);
console.log(student2);
// Access Modifiers public, private and protected
class BankAccount {
    accountHolder;
    balance;
    accountType;
    constructor(holder, balance, type) {
        this.accountHolder = holder;
        this.balance = balance;
        this.accountType = type;
    }
    showBalance() {
        console.log(this.balance);
    }
}
let account1 = new BankAccount("Ali", 5000, "Savings");
console.log(account1.accountHolder);
account1.showBalance();
// account1.balance; 
// account1.accountType; 
// Readonly Properties
class Laptop {
    brand;
    price;
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
}
let laptop1 = new Laptop("HP", 80000);
console.log(laptop1);
// laptop1.brand = "Dell"; 
laptop1.price = 75000;
console.log(laptop1);
let user1 = {
    name: "Hasan",
    email: "hasan@gmail.com",
    age: 22
};
let user2 = {
    name: "Usman",
    email: "usman@gmail.com",
    age: 20,
    city: "Karachi"
};
console.log(user1);
console.log(user2);
// Parameter Properties
class Product {
    name;
    price;
    category;
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}
let product1 = new Product("Keyboard", 2500, "Accessories");
let product2 = new Product("Mouse", 1500, "Accessories");
console.log(product1);
console.log(product2);
// Default Parameter Value
function greetUser(name = "Student") {
    console.log("Welcome " + name);
}
greetUser("Shariq");
greetUser();
