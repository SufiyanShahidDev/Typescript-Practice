

// let userName: string = "Sufiyan";
// let age: number = 21;
// let isStudent: boolean = true;

// console.log(userName);
// console.log(age);
// console.log(isStudent);

// // Undefined and Null

// let address: string | undefined;
// let userData: null = null;

// console.log(address);
// console.log(userData);


// // Arrays

// let fruits: string[] = ["Apple", "Mango", "Banana"];

// let marks: number[] = [70, 85, 90];

// let mixedValues: (string | number)[] = ["Sufiyan", 21, "arham", 45];

// console.log(fruits);
// console.log(marks);
// console.log(mixedValues);


// // Tuples

// let studentInfo: [string, number, boolean] = [
//     "Arham",
//     21,
//     true
// ];

// console.log(studentInfo);


// // Enums

// enum UserRole {
//     User = "User",
//     Admin = "Admin",
//     Manager = "Manager"
// }

// console.log(UserRole.Admin);


// enum ResponseStatus {
//     Success = 200,
//     Created = 201,
//     NotFound = 404
// }

// console.log(ResponseStatus.Success);


// // Unknown Type

// let data: unknown;

// data = "Hello World";


// // Type Narrowing

// if (typeof data === "string") {
//     console.log(data.toUpperCase());
// }

// data = 500;

// if (typeof data === "number") {
//     console.log(data.toFixed());
// }

// data = true;

// if (typeof data === "boolean") {
//     console.log(data);
// }


// // Functions 

// const calculateTotal = (): number => {

//     let price = 500;
//     let quantity = 2;

//     return price * quantity;
// };

// console.log(calculateTotal());


// // Type Safety

// let productName: string = "Laptop";
// let productPrice: number = 85000;

// console.log(productName);
// console.log(productPrice);


// // Type Checking with if

// let score: number = 75;

// if (score > 50) {
//     score = 100;
// }

// console.log(score);


// // Union Types

// let productId: string | number = 101;

// productId = "P-101";

// console.log(productId);


// // Interfaces

// interface Student {
//     name: string;
//     age: number;
//     email: string;
// }

// const student: Student = {
//     name: "Sufiyan",
//     age: 21,
//     email: "sufiyan@example.com"
// };

// console.log(student);


// // Interface Extending Another Interface

// interface Account {
//     email: string;
//     password: string;
// }

// interface AdminAccount extends Account {
//     isAdmin: boolean;
// }

// const adminUser: AdminAccount = {
//     email: "admin@example.com",
//     password: "123456",
//     isAdmin: true
// };

// console.log(adminUser);


// //  Merging Interfaces

// interface UserProfile {
//     name: string;
//     age: number;
// }

// interface UserProfile {
//     city: string;
// }

// const profile: UserProfile = {
//     name: "Arham",
//     age: 22,
//     city: "Karachi"
// };

// console.log(profile);


// //  Type Aliases

// type Value = string | number | boolean;

// let myValue: Value = "Hello";

// myValue = 100;

// myValue = true;

// console.log(myValue);


// // Type Alias with Union

// type ID = string | number;

// let userId: ID = 123;

// userId = "USER-123";

// console.log(userId);


// // Intersection Types

// type UserDetails = {
//     name: string;
//     age: number;
// };

// type ContactDetails = {
//     email: string;
// };

// type CompleteUser = UserDetails & ContactDetails;

// const completeUser: CompleteUser = {
//     name: "Sufiyan",
//     age: 21,
//     email: "sufiyan@example.com"
// };

// console.log(completeUser);


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

// class Mobile {

//     brand: string;
//     price: number;

//     constructor(brand: string, price: number) {
//         this.brand = brand;
//         this.price = price;
//     }
// }

// let mobile1 = new Mobile("Samsung", 45000);
// let mobile2 = new Mobile("Infinix", 35000);

// console.log(mobile1);
// console.log(mobile2);


// // Constructors

// class Student {

//     name: string;
//     age: number;
//     email: string;

//     constructor(n: string, a: number, e: string) {
//         this.name = n;
//         this.age = a;
//         this.email = e;
//     }
// }

// let student1 = new Student("Ali", 19, "ali@gmail.com");
// let student2 = new Student("Ahmed", 21, "ahmed@gmail.com");

// console.log(student1);
// console.log(student2);


// // Access Modifiers public, private and protected

// class BankAccount {

//     public accountHolder: string;
//     private balance: number;
//     protected accountType: string;

//     constructor(holder: string, balance: number, type: string) {
//         this.accountHolder = holder;
//         this.balance = balance;
//         this.accountType = type;
//     }

//     public showBalance(): void {
//         console.log(this.balance);
//     }
// }

// let account1 = new BankAccount("Ali", 5000, "Savings");

// console.log(account1.accountHolder);
// account1.showBalance();

// // account1.balance; 
// // account1.accountType; 


// // Readonly Properties

// class Laptop {

//     constructor(
//         public readonly brand: string,
//         public price: number
//     ) {}

// }

// let laptop1 = new Laptop("HP", 80000);

// console.log(laptop1);

// // laptop1.brand = "Dell"; 

// laptop1.price = 75000;

// console.log(laptop1);


// // Optional Properties

// interface UserProfile {

//     name: string;
//     email: string;
//     age: number;
//     city?: string;
// }

// let user1: UserProfile = {
//     name: "Hasan",
//     email: "hasan@gmail.com",
//     age: 22
// };

// let user2: UserProfile = {
//     name: "Usman",
//     email: "usman@gmail.com",
//     age: 20,
//     city: "Karachi"
// };

// console.log(user1);
// console.log(user2);


// // Parameter Properties

// class Product {

//     constructor(
//         public name: string,
//         public price: number,
//         public category: string
//     ) {}

// }

// let product1 = new Product("Keyboard", 2500, "Accessories");
// let product2 = new Product("Mouse", 1500, "Accessories");

// console.log(product1);
// console.log(product2);


// // Default Parameter Value

// function greetUser(name: string = "Student"): void {

//     console.log("Welcome " + name);
// }

// greetUser("Shariq");
// greetUser();



// getters and setters

// class Student {
//   private userName: string;

//   constructor(name: string) {
//     this.userName = name;
//   }

//   // Getter
//   get name(): string {
//     return this.userName;
//   }

//   // Setter
//   set name(newName: string) {
//     this.userName = newName;
//   }
// }

// const student1 = new Student("Ali");

// console.log(student1.name);

// student1.name = "Ahmed";

// console.log(student1.name);



// Static Members

// class Student {

//     static institute = "SMIT";

//     static showInstitute() {
//         return Student.institute;
//     }
// }

// console.log(Student.institute);
// console.log(Student.showInstitute());


// // Abstract Classes and Methods

// abstract class Vehicle {

//     constructor(public name: string) {}

//     abstract start(): void;
// }

// class Car extends Vehicle {

//     start(): void {
//         console.log(this.name + " is starting");
//     }
// }

// let car1 = new Car("mehran");

// car1.start();


// // Functions

// function showMessage(message: string): void {
//     console.log(message);
// }

// showMessage("Welcome to TypeScript");


// // Function Types

// function greet(name: string, cb: (value: string) => void): void {

//     cb(name);
// }

// greet("Sufiyan", (value: string): void => {
//     console.log("Hello " + value);
// });


// // Optional and Default Parameters

// function showDetails(name: string, age?: number): void {
//     console.log(name);
//     console.log(age);
// }

// showDetails("Ali");
// showDetails("Ahmed", 20);


// function calculatePrice(price: number, discount: number = 10): void {
//     console.log(price - discount);
// }

// calculatePrice(100);
// calculatePrice(100, 20);


// // Rest Parameters

// function getMarks(...marks: number[]): void {
//     console.log(marks);
// }

// getMarks(70, 80, 90, 85);


// function showNames(...names: string[]): void {
//     console.log(names);
// }

// showNames("Ali", "Ahmed", "Usman");


// // Function Overloading

// function display(value: number): void;
// function display(value: string): void;

// function display(value: string | number): void {

//     if (typeof value === "string") {
//         console.log(value.toUpperCase());
//     } else {
//         console.log(value + 10);
//     }
// }

// display(50);
// display("hello");


// // Generic Functions

// function showValue<T>(value: T): void {
//     console.log(value);
// }

// showValue<number>(100);
// showValue<string>("Sufiyan");
// showValue<boolean>(true);


// // Generic Interfaces

// interface Account<T> {
//     email: string;
//     password: string;
//     secretCode: T;
// }

// function showAccount(user: Account<number>): void {
//     console.log(user.email);
//     console.log(user.secretCode);
// }

// showAccount({
//     email: "ali@gmail.com",
//     password: "12345",
//     secretCode: 4567
// });


// // Generic Classes

// class Box<T> {

//     constructor(public value: T) {}

// }

// let box1 = new Box<number>(500);
// let box2 = new Box<string>("Books");

// console.log(box1);
// console.log(box2);


// // --------------------------------------------------
// // 11. Type Assertion
// // --------------------------------------------------

// let someValue: unknown = "typescript";

// let textValue = someValue as string;

// console.log(textValue.toUpperCase());


// // Type Casting

// let price: number = 250;

// let priceString = String(price);

// console.log(priceString);


// // Non-Null Assertion Operator

// let userName: string | null = "Sufiyan";

// console.log(userName!.toUpperCase());


// // Type Guards

// function checkValue(value: string | number): void {

//     if (typeof value === "string") {
//         console.log(value.toUpperCase());
//     }

//     if (typeof value === "number") {
//         console.log(value.toFixed());
//     }
// }

// checkValue("hello");
// checkValue(250);


// // Using typeof

// let myValue: string | number = 100;

// if (typeof myValue === "number") {
//     console.log(myValue + 50);
// }


// // Using instanceof

// class Mobile {

//     constructor(public brand: string) {}

// }

// let mobile1 = new Mobile("Samsung");

// if (mobile1 instanceof Mobile) {
//     console.log(mobile1.brand);
// }


// // Partial Utility Type

// interface StudentInfo {
//     name: string;
//     age: number;
//     city: string;
// }

// let student1: Partial<StudentInfo> = {
//     name: "Hasan"
// };

// console.log(student1);


// // Required Utility Type

// interface UserInfo {
//     name?: string;
//     email?: string;
// }

// let user1: Required<UserInfo> = {
//     name: "Ahmed",
//     email: "ahmed@gmail.com"
// };

// console.log(user1);


// // Readonly Utility Type

// interface ProductInfo {
//     name: string;
//     price: number;
// }

// let product1: Readonly<ProductInfo> = {
//     name: "Keyboard",
//     price: 2000
// };

// console.log(product1);


// function

const abc = (n: number, cb:(n: number)=> number) => {
    cb(22)
}

abc(12, (n: number) => {
    console.log(n);
    
    return 12
})