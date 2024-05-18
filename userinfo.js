//Task 3
const { processArray, formatArrayStrings } = require('./arrayManipulation');

function createUserProfiles(names, modifiedNames) {
 return names.map((name, index) => {
    return{
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    };
 });
}

//Example Usage
const names =["Jane", "Mariah", "Neville", "Calvin"];
const numbers = [2, 4, 6, 8, 10];
const processedNumbers = processArray(numbers);
const modifiedNames = formatArrayStrings(names, processedNumbers);

const userProfiles = createUserProfiles(names, modifiedNames);
console.log(userProfiles);

module.exports = createUserProfiles;
