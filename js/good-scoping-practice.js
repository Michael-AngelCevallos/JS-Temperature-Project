/* #1.Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.*/


// const logVisibleLightWaves = () => {
//     let lightWaves = 'Moonlight';
//     let region = 'The Arctic';
//     if(region === 'The Arctic'){
//         console.log(region);
//     }
//     console.log(lightWaves);
// }
//
// logVisibleLightWaves();



/* #2.Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.*/

 /* #3 Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.
Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.*/


const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';

    if(region === 'The Arctic'){
        let lightWaves = 'Northern Lights';
        console.log(region);
        // console.log(lightWaves)  // This will call to variable WITHIN  if Statement
    }

    console.log(lightWaves); // This will call GLOBAL VARIABLE
}

logVisibleLightWaves();