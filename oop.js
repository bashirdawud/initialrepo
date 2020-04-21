// Object Oriented Programming (OOP) refers to using self-contained pieces of code to develop applications
// The two important principles with OOP in JavaScript are Object Creation patterns (Encapsulation) and Code Reuse patterns (Inheritance).
/*
When an object instance is created from a class, the class's constructor function is run to create it. 
This process of creating an object instance from a class is called instantiation — 
the object instance is instantiated from the class.

*/

//special class - in oop we can create the child classes which are made to inherit the properties and methods of parent class
// defining and object template 
class person {
    constructor(name, age, gender)
}
class teacher extends person{
    constructor(interest){
        super(name, age, gender)
        this.interest = interest
    }
}

class student extends person{
    constructor(grade){
        super(name, age, gender)
        this.grade = grade
    }
}
// using object
const firstPerson = new person("Ade", 23, "male")
console.log(firstPerson)

// Constructors and object instances
// JavaScript uses special functions called constructor functions to define and initialize objects and their features.
function greeting(name){
    this.name = name;
    this.greeting = function(){
        alert("Hi I'm "+this.name+ '.')
    }
}

// A constructor function name usually starts with a capital letter

// The Object() constructor
let person1 = new Object();// this creates a new object and store it in person1 variable
// we can then assign properties to this object 
person1.firstName ="Bob"
person1.age = 45 

// Using the create() method // allow you to create an object base on an existing object

let person2 = Object.create(person1);

// person2 has the same properties avaliable to person1





//New Section
// Javascript is not a class based object oriented language but has it way of implementing OOP
// every object in javascript has access to Object.prototype properties but they do not own these properties 
// __proto__ point to the object which is used as the prototype 
// Every object has this property by default, which refers to the Object Protoype except when configured otherwise

// Modifying the __proto__ property
// we use Object.create() to specify that __proto__ should point to another prototype
// "new keyword" 

// class usage in OOP
class car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    }
    drive() {
        return `${this.name} can drive a car`;
    }
   
}
let myCar = new Animals("Benz", "2020");
console.log(myCar);

// using the new keyword approach
function car(name, model) {
    this.name = name;
    this.model = model;
}
car.prototype.drive = function(){
    return `${this.name} can drive a car`;
}

let myCar = new car("Banz", "2020");

// Subclassing
// This is a feature in OOP where a class inherits features from a parent class but possesses extra features which the parent doesn't.

// example
class Animal{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    walk(){
        return `${this.name} can walk on two feet`
    }
}

class Animal extends cat {
    constructor(name, age, whiskerColor) {
        super(name, age);
        this.whiskerColor = whiskerColor;
    }
    whiskers() {
        return `I have ${this.whiskerColor} whiskers`;
    }
}
// create a new cat object
let clara = new Cats("Clara", 33, "indigo");