

// 1. Basic Data Types

let userName: string = "Sufiyan";
let age: number = 21;
let isStudent: boolean = true;

console.log(userName);
console.log(age);
console.log(isStudent);


// 2. Undefined and Null

let address: string | undefined;
let userData: null = null;

console.log(address);
console.log(userData);


// 3. Arrays

let fruits: string[] = ["Apple", "Mango", "Banana"];

let marks: number[] = [70, 85, 90];

let mixedValues: (string | number)[] = ["Sufiyan", 21, "arham", 45];

console.log(fruits);
console.log(marks);
console.log(mixedValues);


// 4. Tuples

let studentInfo: [string, number, boolean] = [
    "Sufiyan",
    21,
    true
];

console.log(studentInfo);


// 5. Enums

enum UserRole {
    User = "User",
    Admin = "Admin",
    Manager = "Manager"
}

console.log(UserRole.Admin);


enum ResponseStatus {
    Success = 200,
    Created = 201,
    NotFound = 404
}

console.log(ResponseStatus.Success);


// 6. Unknown Type

let data: unknown;

data = "Hello World";


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

const calculateTotal = (): number => {

    let price = 500;
    let quantity = 2;

    return price * quantity;
};

console.log(calculateTotal());


// 9. Type Safety

let productName: string = "Laptop";
let productPrice: number = 85000;

console.log(productName);
console.log(productPrice);


// 10. Type Checking with if

let score: number = 75;

if (score > 50) {
    score = 100;
}

console.log(score);


// 11. Union Types

let productId: string | number = 101;

productId = "P-101";

console.log(productId);


// 12. Interfaces

interface Student {
    name: string;
    age: number;
    email: string;
}

const student: Student = {
    name: "Sufiyan",
    age: 21,
    email: "sufiyan@example.com"
};

console.log(student);


// 13. Interface Extending Another Interface

interface Account {
    email: string;
    password: string;
}

interface AdminAccount extends Account {
    isAdmin: boolean;
}

const adminUser: AdminAccount = {
    email: "admin@example.com",
    password: "123456",
    isAdmin: true
};

console.log(adminUser);


// 14. Merging Interfaces

interface UserProfile {
    name: string;
    age: number;
}

interface UserProfile {
    city: string;
}

const profile: UserProfile = {
    name: "Arham",
    age: 22,
    city: "Karachi"
};

console.log(profile);


// 15. Type Aliases

type Value = string | number | boolean;

let myValue: Value = "Hello";

myValue = 100;

myValue = true;

console.log(myValue);


// 16. Type Alias with Union

type ID = string | number;

let userId: ID = 123;

userId = "USER-123";

console.log(userId);


// 17. Intersection Types

type UserDetails = {
    name: string;
    age: number;
};

type ContactDetails = {
    email: string;
};

type CompleteUser = UserDetails & ContactDetails;

const completeUser: CompleteUser = {
    name: "Sufiyan",
    age: 21,
    email: "sufiyan@example.com"
};

console.log(completeUser);


// 18. Function with Interface

interface Product {
    name: string;
    price: number;
}

function showProduct(product: Product): void {
    console.log(product.name);
    console.log(product.price);
}

showProduct({
    name: "Keyboard",
    price: 2500
});


// 19. Class

class ProductItem {

    constructor(
        public name: string,
        public price: number
    ) {}
}

let product1 = new ProductItem("Keyboard", 2500);
let product2 = new ProductItem("Mouse", 1500);

console.log(product1);
console.log(product2);