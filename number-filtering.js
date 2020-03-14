let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numbers = myNumbers;

function filterEven(){
    for(let num of numbers){
      if(num % 2 == 0){
        console.log(num)
      }
    }
}

filterEven();

// task 4

const userScore = [  
    {id: 1, name: 'Olarike', score: 34},  
    {id: 2, name: 'Taiwo', score: 12},  
    {id: 3, name: 'Kehinde', score: 27} ];

// Find where user score above 12 and return the user info.

function returnUser(){
    let user = userScore.filter(item => item.score > 12);
    console.log(user)
}

returnUser();


function findScore(){
    Score = userScore.filter(item => item.score)
    Score.sort((function(a, b){return b.score - a.score}))
    console.log(Score)
}

findScore()


// Loop through the array after sort and return the each user. Note your position should start at 1.
for(let i = 0; i< userScore.length; i++){
    console.log(userScore[i])
}


// Sum the total score of the user in the array.
let sum = 0; 
for(let i = 0; i< userScore.length; i++){
    sum += userScore[i].score;
    
}
console.log( 'Total Score :' +sum)


// Merge the below array to the userScore array above:
const newUserScore = [  
    {id: 5, name: 'wale', score: 34},  
    {id: 6, name: 'wole', score: 12},  
    {id: 4, name: 'bobby', score: 27}];


    newUserScore.forEach(item => {
        userScore.push(item)
    });
    console.log(userScore);
