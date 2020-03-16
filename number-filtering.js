let myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        let numbers = myNumbers;

        function filterEven(){
            let newEven = [];
            for(let num of numbers){
                if(num % 2 == 0){
                    newEven.push(num);
                    
      }

    }
    console.log(newEven);
}
filterEven();
// task 4

const userScore = [  
    {id: 1, name: 'Olarike', score: 34},  
    {id: 2, name: 'Taiwo', score: 12},  
    {id: 3, name: 'Kehinde', score: 27} ];

// Find where user score above 12 and return the user info.

let userScoreAbove12 = userScore.filter(e => e.score > 12)
console.log(userScoreAbove12);


// Sort the array in descending order based on the user score

let sortArray = userScore.sort((a,b) => b.score - a.score);
console.log(sortArray);

// Loop through the array after sort and return the each user. Note your position should start at 1.

sortArray.forEach((item, index)=> {
    if(index > 0){
        console.log(item);
    }
    
})


// Sum the total score of the user in the array.
let userSumScore =  userScore.reduce((a,b) => { return a + b.score}, 0)
console.log(userSumScore);


// Merge the below array to the userScore array above:
const newUserScore = [  
    {id: 5, name: 'wale', score: 34},  
    {id: 6, name: 'wole', score: 12},  
    {id: 4, name: 'bobby', score: 27}];

let arrayMerge = [...userScore, ...newUserScore]
console.log(arrayMerge);
