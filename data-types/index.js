var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//-- primitive data types
var num = 10;
var num = 10.10;
var harshit = null;
var isLogin = false;
var username = "JohnDoe";
var h = undefined;
//const sym1 = Symbol ();
//const sym2 = Symbol('description' );
//const sym3 = Symbol('description' );
//console.log(sym1 === sym2); // false
//console.log(sym2 === sym3); // false
//-- object data types
var score = [90, 80, 70];
var user = [1, "Alice"];
var person = { id: 1, name: "Bob" };
//-- special types
//any type
var data = 42;
data = "Now I'm a string";
data = true;
//unknown type
var info = 100;
info = "Now I'm a string";
//info=true; // Error: Type 'string' is not assignable to type 'boolean'.
if (typeof info === "string") {
    console.log(info.toUpperCase()); // Now I'M A STRING
}
//void type
function Message() {
    console.log("This is a log message.");
}
//never type
function errorFunction() {
    throw new Error("This function never returns.");
}
//-- type assertions
var someValue = "This is a string";
var strLength = someValue.length;
//-- advanced types
// union types  
var unionVar;
unionVar = "Hello";
unionVar = 42;
var emp = { name: "Charlie", privileges: ["create-server"], startDate: new Date() };
var userid;
userid = "User123";
userid = 456;
// Enum types
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// literal types
var literalVar;
literalVar = "success";
//literalVar="pending"; // Error: Type '"pending"' is not assignable to type '"success" | "failure"'.
//-- function types
function add(a, b) {
    return a + b;
}
//------------------------number types--------------------------
//var var_name : data_type = value
var num1 = 10;
var num2 = 30;
var num3 = 30;
var total = num1 + num3;
console.log(total);
var oct = 32769;
var hexa = 1;
var binary = 0x00001;
console.log(oct + 10);
var item = 100;
var item2 = "50";
// var item2Converted=Number(item2)
var item2Converted = +item2;
console.log(item + +item2Converted);
// var data =30;
// data=40
// data="anil sidhu"
var data = 30;
data = "anil";
//------------------------string and boolean types--------------------------
var str = "Hello How are you";
var str2 = 'Hello How are you';
var str3 = "Hello How are you";
var age = 30;
var userName = "Anil sidhu";
//var info1: string= `my name is ${userName} and age is ${age}`
//console.log(info1);
var num = 100;
// var data:string = num. toString();
// var data: string = " "+ num;
var boolData = true;
// var data:string = boolData. toString();
var data1 = "" + boolData;
//------------------------Null and Undefined types--------------------------
var n = null;
var u = undefined;
console.log(n == u); // true
console.log(n === u); // false
//------------------------Big int--------------------------
var bigIntNum = 9007199254741991n;
console.log(bigIntNum + 10n);
//------------------------Symbol type--------------------------
// var sym1: symbol = Symbol();
// var sym2: symbol = Symbol('id');
// const dId= Symbol('id');
// const mId= Symbol('id');
// console.log(dId===mId); // false
// const obj={
// [dId]:100,
// name: 'anil sidhu'
// }
// console. log(obj.[dId]);
//------------------------array data type--------------------------
var arr1 = [10, 20, 30];
var arr2 = ['anil', 'sidhu', 'kumar'];
var arr3 = [10, 'anil', 20, 'sidhu'];
console.log(arr3);
var users = ['anil', 'sam', 'peter'];
var marks = [50, 60, 92, 36];
var students = ['bruce', 'arya'];
students.push('sidhu');
marks.push(100);
var collegeName = [' IET alwar', 'iit delhi'];
// collegeName.push('abc') // error
console.log(students);
//------------------------tuple data type--------------------------
var userDetails = [1, 'anil', true];
userDetails.push(100); // allowed
console.log(userDetails);
var userDetails2 = [1, 'anil', true];
//------------------------object data type--------------------------
var employee = {
    id: 1,
    name: 'anil sidhu',
    isAdmin: true
};
console.log(employee);
employee.id = 2;
console.log(employee);
var userData = {
    name: 'Anil sidhu',
    age: 30,
    company: undefined
};
userData.company = "HCL";
userData.city = "Noida";
console.log(userData);
var employee2 = {
    id: 1,
    name: 'anil sidhu',
    address: {
        street: 'MG road',
        city: 'Noida'
    }
};
console.log(employee2);
//------------------------ any and unknown data types--------------------------
var dataAny = 100;
dataAny = 'Hello';
var dataUnknown = 200;
dataUnknown = "harshit";
if (typeof dataUnknown === 'string') {
    console.log(dataUnknown.toUpperCase());
}
//------------------------function return data types--------------------------
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
function logMessage(message) {
    console.log(message);
}
logMessage("Hello World");
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
//throwError("This is a fatal error");
function infiniteLoop() {
    while (true) {
    }
}
//infiniteLoop();
//-------------------------union and intersection data types--------------------------
var unionData;
unionData = "Hello";
unionData = 100;
console.log(unionData);
var emp = {
    name: "anil",
    privileges: ["create-server"],
    startDate: new Date()
};
console.log(emp);
var user1 = {
    id: 1,
    name: 'pandu',
    isAdmin: true
};
console.log(user1);
;
var user2 = {
    id: 2,
    name: 'harshit',
    isHero: true
};
console.log(user2);
var product1 = {
    id: 1,
    name: 'Laptop',
    price: 50000,
    isAvailable: true
};
console.log(product1);
//------------------------enum data type--------------------------
var Direction1;
(function (Direction1) {
    Direction1["Up"] = "1";
    Direction1["Down"] = "2";
    Direction1["Left"] = "3";
    Direction1["Right"] = "4";
})(Direction1 || (Direction1 = {}));
var dir = Direction1.Left;
console.log(dir);
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["manager"] = 1] = "manager";
    Roles[Roles["developer"] = 2] = "developer";
    Roles[Roles["user"] = 3] = "user";
})(Roles || (Roles = {}));
var userRole = Roles.admin;
console.log(userRole);
//------------------------classes in typescript--------------------------
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.display = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name));
    };
    return Person;
}());
var person1 = new Person(1, 'Harshit Wadichar');
person1.display();
//------------------------Access Modifiers  --------------------------
var EmployeeAccess = /** @class */ (function () {
    function EmployeeAccess(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    EmployeeAccess.prototype.display = function () {
        console.log("ID: ".concat(this.id, ", Name: ").concat(this.name, ", Salary: ").concat(this.salary));
    };
    return EmployeeAccess;
}());
var empAccess = new EmployeeAccess(1, 'Anil Sidhu', 50000);
empAccess.display();
console.log(empAccess.id); // accessible
//console.log(empAccess.name); // Error: Property 'name' is private
//console.log(empAccess.salary); // Error: Property 'salary' is protected
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(id, name, salary) {
        return _super.call(this, id, name, salary) || this;
    }
    Manager.prototype.showSalary = function () {
        console.log("Salary: ".concat(this.salary)); // accessible
    };
    return Manager;
}(EmployeeAccess));
var mgr = new Manager(2, 'Harshit Wadichar', 80000);
mgr.showSalary();
mgr.display();
console.log(mgr.id); // accessible
//console.log(mgr.name); // Error: Property 'name' is private
//console.log(mgr.salary); // Error: Property 'salary' is protected
//-----------------------inheritance in typescript--------------------------
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        console.log("Some generic sound");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log("Bark");
    };
    return Dog;
}(Animal));
var dog = new Dog("Buddy");
dog.makeSound();
console.log(dog.name);
//------------------------ Modules in TypeScript  --------------------------
//import { greet } from './greetings.js'; 
//greet('Harshit');
//import kamlesh from './module/module.js';
//kamlesh();
//------------------------ Getters and Setters in TypeScript --------------------------
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this._radius = radius;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (radius) {
            if (radius <= 0) {
                throw new Error("Radius must be positive");
            }
            this._radius = radius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "area", {
        get: function () {
            return Math.PI * this._radius * this._radius;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
var circle = new Circle(5);
console.log("Radius: ".concat(circle.radius));
console.log("Area: ".concat(circle.area));
circle.radius = 10;
console.log("Updated Radius: ".concat(circle.radius));
console.log("Updated Area: ".concat(circle.area));
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var rectangle = new Rectangle(10, 20);
console.log("Area: ".concat(rectangle.area()));
console.log("Perimeter: ".concat(rectangle.perimeter()));
//-------------------------Static Keyword in TypeScript--------------------------
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.calculateCircumference = function (radius) {
        return 2 * MathUtil.PI * radius;
    };
    MathUtil.PI = 3.14159;
    return MathUtil;
}());
console.log("Circumference: ".concat(MathUtil.calculateCircumference(10)));
//-------------------------Typegaurd in typescript--------------------------
function padLeft(value, padding) {
    if (typeof padding === 'number') {
        return ' '.repeat(padding) + value;
    }
    if (typeof padding === 'string') {
        return padding + value;
    }
    throw new Error("Expected string or number, got '".concat(typeof padding, "'"));
}
console.log(padLeft("Hello", 4));
console.log(padLeft("Hello", "***"));
//console.log(padLeft("Hello",true)); // Error: Expected string or number, got 'boolean'
//-------------------------Generic in TypeScript--------------------------
function identity(arg) {
    return arg;
}
console.log(identity(100));
console.log(identity("Harshit"));
function getArrayLength(arr) {
    return arr.length;
}
console.log(getArrayLength([1, 2, 3, 4, 5]));
console.log(getArrayLength(['a', 'b', 'c']));
function getProperty(obj, key) {
    return obj[key];
}
var personInfo = { id: 1, name: 'Anil', age: 30 };
console.log(getProperty(personInfo, 'name'));
console.log(getProperty(personInfo, 'age'));
var myArray;
myArray = ['Anil', 'Harshit', 'Kamlesh'];
console.log(myArray[0]);
console.log(myArray[1]);
var myDict = {};
myDict['name'] = 'kamlesh';
myDict['city'] = 'Noida';
console.log(myDict['name']);
console.log(myDict['city']);
