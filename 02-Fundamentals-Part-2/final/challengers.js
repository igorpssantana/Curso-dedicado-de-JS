'use strict';

// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
let score1 = Number(prompt('Enter 1º score do Dolphins:')), score2 = Number(prompt('Enter 2º score do Dolphins:')), score3 = Number(prompt('Enter 3º score do Dolphins:'));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphinsScore = calcAverage(score1, score2, score3);

score1 = Number(prompt('Enter 1º score do Koalas:')), score2 = Number(prompt('Enter 2º score do Koalas')), score3 = Number(prompt('Enter 3º score do Koalas:'));

let avgKoalasScore = calcAverage(score1, score2, score3);

const checkWinner = (avgDolphinsScore, avgKoalasScore) => {

    if (avgDolphinsScore >= 2 * avgKoalasScore) {
        console.log(`Dolphins win (${avgDolphinsScore} vs. ${avgKoalasScore})`);
    } else if(avgKoalasScore >= 2* avgDolphinsScore) {
        console.log(`Koalas win (${avgKoalasScore} vs. ${avgDolphinsScore})`);
    } else {
        console.log('Draw');
    }
}

checkWinner(avgDolphinsScore, avgKoalasScore);
*/

// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
const calcTip = (billValue) => {

    if(billValue >= 50 && billValue <= 300){
        return billValue*0.15;
    } else {
        return billValue*0.2;
    }
    
}

const bills = [];

const total = [];

for(let a = 0; a < 3; a++){

    bills.push(Number(prompt(`Enter the ${a+1}º bill value`)));
}

for(let b = 0; b < 3; b++){

    total.push(bills[b] + calcTip(bills[b]));
}

for(let c = 0; c < 3; c++){

    console.log(`The ${c+1}º bill costs ${total[c]} at total`);
}

*/

// Coding Challenge #3

/*
const igor = {
    name: 'Igor',
    birthday: 2003,
    height: 1.90,
    weight: 100,
    job: 'developer',
    hobbies: ['gaming', 'ping pong', 'singing'],

    calcAge: function () {

        this.age = 2023 - this.birthday;
        this.age = `${this.age} years old`;
        return this.age;
    },
    makeDescription: function(){
        this.calcAge();
        this.description = `My name's ${this.name} and i'm a ${this.age} web ${this.job} :) !`;
        return this.description;
    }
}

console.log(igor.makeDescription());
*/

// Coding Challenge #4

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {

    name: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
}
}

const john = {

    name: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function () {

        this.bmi = this.mass / (this.height * this.height);

        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi){

    console.log(`${mark.name}'s BMI (${mark.bmi}) is higher than ${john.name}'s (${john.bmi})`);
} else {
    console.log(`${john.name}'s BMI (${john.bmi}) is higher than ${mark.name}'s (${mark.bmi})`);
}

*/

// Coding Challenge #5

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
let bills = [];


const calcAverage = total => {

    let average = 0;

    for(let a = 0; a < 10; a++ ){

        average += total[a];
    }

    return average / 10;
}

for(let a = 0; a < 10; a++){

    bills.push(Number(prompt(`Enter the ${a+1}º bill value`)));
}

let totals = [];

for(let a = 0; a < 10; a++){
    totals.push(bills[a]*1.15);
}

console.log(` Total bill average: ${calcAverage(totals)} !`);

*/
