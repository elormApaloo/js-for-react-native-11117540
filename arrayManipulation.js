

function processArray(arr){
// Use the map function to create a new array with the required transformation
return arr.map(num=>{
    if (num % 2 === 0){
    // If the number is even, square it
    return num * num;
    }else {
        // If the number is odd, triple it
        return num * 3;
    }
})

}
const inputArray = [3,6,9,14,25]
const processedArray = processArray(inputArray)

console.log(processedArray);


// Task 2
function formatArrayStrings(strings, numbers) {
return strings.map((str, index)=> {
if (numbers[index] % 2 === 0){
return str.toUpperCase();
}else{
    return str.toLowerCase();
}
});
}

// Example Usage
const inputNumbers = [2, 4, 6, 8, 10];
const processedNumbers = processArray(inputNumbers);
const inputStrings = [ "Jane", "is", "good", "at", "basketball"];
const formattedStrings = formatArrayStrings(inputStrings, processedNumbers);
console.log(formattedStrings);

module.exports = {
processArray,
formatArrayStrings
};






