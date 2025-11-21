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
var info = "my name is ".concat(userName, " and age is ").concat(age);
console.log(info);
var num = 100;
// var data:string = num. toString();
// var data: string = " "+ num;
var boolData = true;
// var data:string = boolData. toString();
var data = "" + boolData;
