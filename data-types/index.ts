
//-- primitive data types
var num:number=10;
var num:number=10.10;
var harshit = null;
var isLogin=false;
var username:string="JohnDoe";
var h: undefined=undefined;

//const sym1 = Symbol ();
//const sym2 = Symbol('description' );
//const sym3 = Symbol('description' );

//console.log(sym1 === sym2); // false
//console.log(sym2 === sym3); // false

//-- object data types
var score:number[]= [90,80,70];
var user:[number,string]=[1,"Alice"];
var person:{id:number,name:string}={id:1,name:"Bob"};

//-- special types
//any type
var data:any=42;
data="Now I'm a string";
data=true;

//unknown type
var info:unknown=100;
info="Now I'm a string";
//info=true; // Error: Type 'string' is not assignable to type 'boolean'.
if (typeof info === "string") {
    console.log(info.toUpperCase()); // Now I'M A STRING
}

//void type
function Message():void{
    console.log("This is a log message.");
}

//never type
function errorFunction():never{
    throw new Error("This function never returns.");
}

//-- type assertions
var someValue:unknown="This is a string";
var strLength:number=(someValue as string).length;

//-- advanced types
// union types  
var unionVar:string|number;
unionVar="Hello";
unionVar=42;

//intersection types
type Admin={name:string,privileges:string[]};
type Employee={name:string,startDate:Date};
type ElevatedEmployee=Admin & Employee;
var emp:ElevatedEmployee={name:"Charlie",privileges:["create-server"],startDate:new Date()};

// type aliases
type Combinable=string|number;
let userid:Combinable;
userid="User123";
userid=456;

// Enum types
enum Color {Red,Green,Blue}
var c:Color=Color.Green;

// literal types
let literalVar:"success"|"failure";
literalVar="success";
//literalVar="pending"; // Error: Type '"pending"' is not assignable to type '"success" | "failure"'.

//-- function types
function add(a:number,b:number):number{
    return a+b;
}

//------------------------number types--------------------------
//var var_name : data_type = value
var num1:number=10;
var num2:number=30
var num3:number=30

var total:number=num1+num3;
console.log(total);

var oct:number=0o100001;
var hexa:number=0b00001;
var binary:number=0x00001;

console.log(oct+10);

var item:number=100;
var item2="50";
// var item2Converted=Number(item2)
var item2Converted=+item2
console.log(item+ +item2Converted);

// var data =30;
// data=40
// data="anil sidhu"

var data: number | string = 30;
data="anil";


//------------------------string and boolean types--------------------------
var str:string="Hello How are you";
var str2:string='Hello How are you';
var str3:string=`Hello How are you`;

var age :number=30;
var userName: string="Anil sidhu";

var info:string= `my name is ${userName} and age is ${age}`;
console.log(info);

var num:number=100;
// var data:string = num. toString();
// var data: string = " "+ num;
var boolData=true;
// var data:string = boolData. toString();
var data: string = "" +boolData;