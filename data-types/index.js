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
