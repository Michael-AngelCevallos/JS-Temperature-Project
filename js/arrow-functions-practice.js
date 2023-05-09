

// Original Code
const plantNeedsWater = function(day = 'Wednesday') {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
console.log(plantNeedsWater())

/** change above to use Arrow function */

const plantNeedsWater2 = (day = 'Wednesday') => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
}

console.log(plantNeedsWater2())

/** Concise Body Arrow Function (ONE PARAMETER DOESN'T NEED PARENTHESIS, ZERO, TWO, OR MORE DO NEED PARENTHESIS)*/

const plantNeedsWater3 = day =>
    day === 'Wednesday' ? true : false;

console.log(plantNeedsWater3('Wednesday'))