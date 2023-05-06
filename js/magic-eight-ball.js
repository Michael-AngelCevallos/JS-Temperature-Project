/** Magic Eight Ball
// You’ve learned a powerful tool in JavaScript: control flow! It’s so powerful, in fact, that it can be used to tell someone’s fortune.
//
//     In this project we will build a Magic Eight Ball using control flow in JavaScript.
//
//     The user will be able to input a question, then our program will output a random fortune. */


/* #1 In the first line of the program, define a variable called userName that is set to an empty string.

    If the user wants, they can enter their name in between the quotation marks.*/

/* #2 Below this variable, create a ternary expression that decides what to do if the user enters a name or not. If the user enters a name — like 'Jane' — use string interpolation to log Hello, Jane! to the console. Otherwise, simply log Hello!.*/

/* #3
Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball.*/

let userName = '';
let userQuestion = 'Magic Eight Ball?! What Does My Future Hold For Me?!';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

