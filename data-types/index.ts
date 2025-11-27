
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

//var info1: string= `my name is ${userName} and age is ${age}`
//console.log(info1);

var num:number=100;
// var data:string = num. toString();
// var data: string = " "+ num;
var boolData=true;
// var data:string = boolData. toString();
var data1: string = "" +boolData;

//------------------------Null and Undefined types--------------------------
var n: null = null;
var u: undefined = undefined;

console.log(n==u); // true
console.log(n===u); // false

//------------------------Big int--------------------------
var bigIntNum: bigint = 9007199254741991n;
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
var arr1:number[]=[10,20,30];
var arr2:Array<string>=['anil','sidhu','kumar'];
var arr3:(number | string)[]=[10,'anil',20,'sidhu'];
console.log(arr3);

var users: string []=['anil', 'sam', 'peter' ];
var marks:number[]=[50,60, 92,36];
var students: Array<string>=['bruce','arya']
students.push('sidhu')
marks.push(100)

var collegeName: ReadonlyArray<string>= [' IET alwar' , 'iit delhi']
// collegeName.push('abc') // error
console. log(students);

//------------------------tuple data type--------------------------
var userDetails:[number,string,boolean]=[1,'anil', true];
userDetails.push(100) // allowed
console.log(userDetails);
var userDetails2:[number,string,boolean]=[1,'anil', true];

//------------------------object data type--------------------------
var employee:{id:number, name:string, isAdmin:boolean}={
    id:1,
    name:'anil sidhu',
    isAdmin:true
};
console.log(employee);

employee.id=2
console.log(employee);

var userData:{
[key: string] : string | number| undefined
}={
name: 'Anil sidhu',
age:30,
company: undefined
}
userData.company="HCL";
userData.city="Noida"
console.log(userData) ;

var employee2:{id:number, name:string, address:{
street:string, city:string
}}={
    id:1,
    name:'anil sidhu',
    address:{
        street:'MG road',
        city:'Noida'
    }
};
console.log(employee2);

//------------------------ any and unknown data types--------------------------
var dataAny:any=100;
dataAny='Hello';

var dataUnknown:unknown=200;
dataUnknown="harshit";
if (typeof dataUnknown === 'string'){
    console.log(dataUnknown.toUpperCase());
}

//------------------------function return data types--------------------------
function sum(a:number,b:number):number|string{
    return a+b;
}
console.log(sum(10,20));

function logMessage(message:string):void{
    console.log(message);
}
logMessage("Hello World");
function throwError(errorMsg:string):never{
    throw new Error(errorMsg);
}
//throwError("This is a fatal error");
function infiniteLoop():never{
    while(true){
    }
}
//infiniteLoop();


//-------------------------union and intersection data types--------------------------
var unionData:string|number;
unionData="Hello";
unionData=100;
console.log(unionData);

type Admin1={name:string, privileges:string[]};
type Employee1={name:string, startDate:Date};
type ElevatedEmployee1=Admin & Employee;
var emp:ElevatedEmployee={
name:"anil",
privileges:["create-server"],
startDate:new Date()
};
console.log(emp);

//------------------------Interface -------------------------------
interface User{
    id:number;
    name:string;
    isAdmin?:boolean; // optional property
}

var user1:User={
    id:1,
    name:'pandu',
    isAdmin:true
};
console.log(user1);

interface user2 extends User{
    isHero:true,
};
var user2:user2={
    id:2,
    name:'harshit',
    isHero:true
};
console.log(user2);

//------------------------type in typescript--------------------------
type Product={
    id:number;
    name:string;
    price:number;
    isAvailable?:boolean;
}

type DiscountedProduct={
    discountPercentage:number;
}
type SpecialProduct=Product & DiscountedProduct;

var product1:Product={
    id:1,
    name:'Laptop',
    price:50000,
    isAvailable:true
};
console.log(product1);


//------------------------enum data type--------------------------
enum Direction1{
    Up="1",
    Down="2",       
    Left="3",
    Right="4"
}
var dir:Direction1=Direction1.Left;

console.log(dir);

enum Roles{
admin
manager,
developer,
user
}

var userRole:Roles=Roles.admin;

console. log(userRole);

//------------------------classes in typescript--------------------------
class Person{
    id:number;
    name:string;    
    constructor(id:number,name:string){
        this.id=id;
        this.name=name;        
    }
    display():void{
        console.log(`ID: ${this.id}, Name: ${this.name}`);
    }
}

var person1:Person=new Person(1,'Harshit Wadichar');
person1.display();

//------------------------Access Modifiers  --------------------------
class EmployeeAccess{
    public id:number;
    private name:string;
    protected salary:number;
    constructor(id:number,name:string,salary:number){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    display():void{
        console.log(`ID: ${this.id}, Name: ${this.name}, Salary: ${this.salary}`);
    }
}
var empAccess:EmployeeAccess=new EmployeeAccess(1,'Anil Sidhu',50000);
empAccess.display();
console.log(empAccess.id); // accessible
//console.log(empAccess.name); // Error: Property 'name' is private
//console.log(empAccess.salary); // Error: Property 'salary' is protected
class Manager extends EmployeeAccess{
    constructor(id:number,name:string,salary:number){
        super(id,name,salary);
    }
    showSalary():void{
        console.log(`Salary: ${this.salary}`); // accessible
    }
}
var mgr:Manager=new Manager(2,'Harshit Wadichar',80000);
mgr.showSalary();
mgr.display();
console.log(mgr.id); // accessible
//console.log(mgr.name); // Error: Property 'name' is private
//console.log(mgr.salary); // Error: Property 'salary' is protected

//-----------------------inheritance in typescript--------------------------
class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    makeSound():void{
        console.log("Some generic sound");
    }
}
class Dog extends Animal{
    constructor(name:string){
        super(name);
    }   
    makeSound():void{
        console.log("Bark");
    }
}
var dog:Dog=new Dog("Buddy");
dog.makeSound();
console.log(dog.name);


//------------------------ Modules in TypeScript  --------------------------
//import { greet } from './greetings.js'; 
//greet('Harshit');

//import kamlesh from './module/module.js';
//kamlesh();

//------------------------ Getters and Setters in TypeScript --------------------------
class Circle{
    private _radius:number;
    constructor(radius:number){
        this._radius=radius;
    }
    get radius():number{
        return this._radius;
    }
    set radius(radius:number){
        if(radius<=0){
            throw new Error("Radius must be positive");
        }
        this._radius=radius;
    }
    get area():number{
        return Math.PI*this._radius*this._radius;
    }
}

var circle:Circle=new Circle(5);
console.log(`Radius: ${circle.radius}`);
console.log(`Area: ${circle.area}`);
circle.radius=10;
console.log(`Updated Radius: ${circle.radius}`);
console.log(`Updated Area: ${circle.area}`);
//circle.radius=-5; // Error: Radius must be positive
