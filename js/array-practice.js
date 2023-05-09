

//Creating an Array( which is a list of variables, numbers, boolean values)

const hobbies = ['Basketball', ' Working out', ' Family Time.']

console.log('My hobbies include: ' + hobbies); // prints the brackets and everything between


// ACCESSING ELEMENTS

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]); // returns 'Where there is love there is life'
console.log(famousSayings[3]); // returns undefined

//Updating Elements

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
console.log(groceryList);