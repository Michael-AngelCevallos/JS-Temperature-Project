/** Magic Eight Ball
// You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.
//
//     In this project we will build a Magic Eight Ball using control flow in JavaScript.
//
//     The user will be able to input a question, then our program will output a random fortune. */


/* #1 In the first line of the program, define a variable called userName that is set to an empty string.

    If the user wants, they can enter their name in between the quotation marks.*/

/* #2 Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.*/

/* #3 Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.*/

/* #4 Write a console.log() for the userQuestion, stating what was asked. You can include the user’s name in the console.log() statement, if you wish!
*/

/* #5 We need to generate a random number between 0 and 7.Create another variable, and name it randomNumber. Set it equal to this expression, which uses two methods (Math.floor() and Math.random()) from the Math library.*/


let userName = '';
let userQuestion = 'Magic Eight Ball?! What Does My Future Hold For Me?!';
let randomNumber = Math.floor(Math.random()) * 8;
let eightBall = '';

// userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');


if(randomNumber === 0){
    console.log(eightBall);
}else if(randomNumber === 1){
    console.log('It is decidedly so');
} else if(randomNumber === 2){
    console.log('Reply hazy try again');
} else if(randomNumber === 3) {
    console.log('Cannot predict now');
}else if(randomNumber === 4){
    console.log('Do not count on it');
}else if(randomNumber === 5){
    console.log('My sources say no');
}else if(randomNumber === 6){
    console.log('Outlook not so good');
}else if(randomNumber === 7){
    console.log('Signs point to yes');
} else {
    console.log('Go away');
}

// console.log(userQuestion);
// console.log(randomNumber);

console.log(eightBall);