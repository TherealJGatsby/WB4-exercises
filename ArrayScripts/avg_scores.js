let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

let myAverage = getAverage(myScores);
let yourAverage = getAverage(yourScores);

function getAverage(displayedScores){
    // create an average variable
    let average = 0;

    // loop through the array
    // add the sum of the numbers and divide by the length of the array
    for(i = 0; i < displayedScores.length; i++) {
        average = average + displayedScores[i] / displayedScores.length;
    }


    // return the average
    return average;
}

console.log(`My Average is: ${myAverage.toFixed(2)}.`);
console.log(`Your Average is: ${yourAverage.toFixed(2)}`);