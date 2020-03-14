Array is a special kind of object, suited to storing and managing ordered data items.
JavaScript array can be decleared in two ways
let myArray = [4, 10, 5];
let myArray = new Array();

Javascript array element are numbered from 0 and element can be accessed by their index
example
myArray[0] // returns 4
we can the element in array by using the corresponding index

example 
myArray[1] = 7 // index 1 returns 7 if query

array allows us to add element 
myArray[3] = 23;

we can also can array element 
myArray.Length() // returns the length of the array

in javascript array can store data of any type together

let arr = [1, 'Abdul', {Age: 23}, myFunction() {console.log('Hello World')}];

Array methods
push() // append element to the end of array
pop() // remove element from the end of the array
shift() // remove element from the first index
unshift() // add element to the begining of the array

examples of usage 

let studentNames = ['Abdul', 'Abbas', 'Shola', 'Favor'];
studentNames.push(34) // append 34 to end of array
studentNames.pop() // remove data  from array end
studentNames.shift() // remove first element of an Array
studentNames.unshift() // add element to the begining of the array

Array loops allows us to loop over an array element
for loop
for..of
for..in 

examples
for(let i = 0; i < studentNames.length; i++){
    console.log(student[i])
}
//most preferable because it just return values
for(let names for studentNames){
    console.log(names)
}

for(let names in studentNames){
    console.log(studentNames[names])
}

Multidimentional Array

let scores = [
    [2, 4, 9],
    [45, 4, 19],
    [12, 3, 5]
];

console.log(score[1][2]) // returns 19

toString method

let arr = [1, 2, 3, 4];
arr.toString() // returns a comma separated list of elements


//task 2

let myColors  = ["blue", "green"];
myColors.push("indigo"); // returns ["blue", "green", "indigo"];
myColors[Math.floor((myColors.length -1) / 2)] = "red" // returns ["blue", "red", "indigo"];
console.log(myColor.shift()) // removes "blue"
myColor.unshift("Gold", "Orange"); // returns ["Gold", "Orange", "red", "indigo"];




