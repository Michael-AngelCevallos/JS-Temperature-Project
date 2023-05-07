

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