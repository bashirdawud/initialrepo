//clean code are written which is self explanatory, easy to understand by human and easy to change or extend 
/* qoute by Robert C. Martin (Uncle Bob) goes by "even bad code can function but if code isn't clean,
 it can bring a development organisation to it knees" */
// 1. using strong type check === instead of ==
// using the == to type tends to perform type which eventually result in wrong logic 

//example
0 == false // true
2 == "2" // true
use === instead 
2 === "2" // false

const value = "500";
if (value === 500) {
  console.log(value);
  // it will not be reached beacause "500" is not same as 500
}

if (value === "500") {
  console.log(value);
  // it will be reached since type strict type conversion enforce 
}


// 2. using variable names to defines the intended task 

//bad code 
let uName = prompt('enter your name: ', '');
console.log(uName)

//good code 
let userName = prompt('enter your name: ', '');
consle.log(userName)


// 3. dont add uncessary words 

//bad code 
let nameValue;
let theProduct;

//good code 
let name;
let product;


// 4. make variable context easy to remember

//bad code 
let user = ['john', 'joe']
user.forEach(u => {
    dosomething()
})

//good code 
let user = ['john', 'joe']
user.forEach(user => {
    dosomething()
})


// Don't add unnecessary context.

//bad code 
let product = {
    productName = "soap",
    productValue = "$10"
}

//good code
let product = {
    name = "soap",
    value = "$10"
}



/*functions: a function name should be a verb or a phrase fully 
exposing the intent behind it as well as the intent of the arguments. Their name should say what they do.*/


//bad code 
function notify(user){
    dosomething
}

//good code 
function notifyUser(emailAddress) {
  // implementation
}



/* avoid longer arguments for functions, a function should have two or fewer arguments specified. 
also use default parameter for functions rather than conditional*/


function getShape(type = "cube") {
  // ...
}


//avoid using a single function for mutiple task. functions should just one thing 
function notifyVerifiedUsers(users) {
    users.filter(isUserVerified).forEach(notify);
  }
  
  function isUserVerified(user) {
    const userRecord = database.lookup(user);
    return userRecord.isVerified();
  }

// Use Object.assign to set default objects.
const shapeConfig = {
    type: "cube",
    width: 200
    // Exclude the 'height' key
  };
  
  function createShape(config) {
    config = Object.assign(
      {
        type: "cube",
        width: 250,
        height: 250
      },
      config
    );
  
    
  }
  
  createShape(shapeConfig);

//dont use flag as parameters because they are telling you that the function is doing more than it should.
// dont pollute the global. use ES Classes and inheritance to extend an exiting object 
class SuperArray extends Array {
    myFunc() {
      // implementation inherit properties and methods of the super class 
    }
  }

//  conditional 
// avoid nagative conditional 
// bad code 
function isUserExist(){

}
if(!isUserExist){

}

// good code 
function isUserExist(){

}
if(isUserExist){

}

// use conditional short hand 
if(userExist){

}
if(!userExist){

}

// Avoid conditionals whenever possible. Use polymorphism and inheritance instead.
class teacher{

}

class student extends teacher{
    getGrade(){
        return this.grade 
    }
}

// ES Classes
class car{
    constructor(name){
        this.name = name
    }
}

class model extends car{
    constructor(name, model){
        super(name)
        this.model = model
    }
}

// Use method chaining 
class car {
    constructor(name){
        this.name = name;
    }
}

// setModel(model) {
//     this.model = model
//     // return this for chaining 
//     return this
// };

// setColor(color) {
//     this.color = color
//     // return this for chaining
//     return this
// }

// const car = new car("Benz");
//     .setModel("2019")
//     .setColor("Black")

// conclusion
/* 
you should avoid repetation of code 
*/

//CLEAN CODE APPLIED TO JAVASCRIPT
// code refactoring is the process of restructuring existing computer code without changing its external behavior.
//some of the advantage include 
/*
 improves nonfunctional attributes of the software.
 improved code readability and reduced complexity.
 improve source-code maintainability.
 Create a more expressive internal architecture to improve extensibility.
*/
//code should written in such a way that is easy for human to read
//example
// bad code 
const users = [{id:01, name: "adam", age: 12}, {id:02, name: "ada", age: 22}]
// good code 
const user = [
    {id:01, name: "adam", age: 12},
    {id:02, name: "ada", age: 22}
]

/*developed in english: code should be well written and documented in english language. 
english today is theinternational language and we have to be international because 
that way we can share code with anyone in the world.*/

/*team work:
Create common rules and rely on tools that allow you to generate code uniformly for everyone. 
You have to get to the point where the whole project seems programmed by a single person instead 
of seeing the different customs of the different members of the development team.


*/

// New Section
// what does clean code means: means writing for later self and co-worker and not for machine 
// Your code must be easily understandable for humans.

// naming variables 
// Use intention-revealing names: that specifies purpose of the variable allowing name to be searchable
// example
// dont
let age  = arr.map((i) => i.age)
// do
let ageOfUsers =  users.map((user) => user.age)

//  make meaningful distinctions and don't add extra, unnecessary nouns to the variable names
// DON'T
let nameString

// DO
let name

// Make your variable names easy to pronounce
let firstName = "John";

// Functions should do one thing. They should do it well. They should do it only
function getUserRouteHandler (req, res) {
    const { userId } = req.params
    User.getOne(userId)
      .then((user) => res.json(user))
  }

// Use long, descriptive names: functions should be verb
function inviteUser (emailAddress) { 
    /* implementation */ 
}

// Avoid long argument list in function parameter
// Organize your functions in a file according to the stepdown rule

// How to write nice async code?
// avoid using arrow function
// good
asyncFuncPromise1()
  .then(asyncFuncPromise2)
  .then(asyncFuncPromise3)
  .then((result) => console.log(result))
  .catch((err) => console.error(err))



