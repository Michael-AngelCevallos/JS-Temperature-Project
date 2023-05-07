/** #1 Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:

 Create a variable named plantNeedsWater using the const variable keyword.
 Assign an anonymous function that takes in a parameter of day to plantNeedsWater.*/
//
// const plantNeedsWater = function (day){
//
// }

// #2 Now we need to add some code to the function body of plantNeedsWater():
//
// In the function body add an if conditional that checks day === 'Wednesday'.
//    If the conditional is truthy, inside the if code block, use the return keyword to return true.

const plantNeedsWater = function (day = 'Wednesday'){
    if(day === 'Wednesday'){
        return true;
    } else {
        return false;
    }
}

console.log(plantNeedsWater('friday'))

