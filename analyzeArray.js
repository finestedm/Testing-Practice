export function analyzeArray(arr) {
    const arrayChecker = Array.isArray(arr);
    const arrayNumberChecker = arr.every(element => typeof element === 'number');
    if (arrayNumberChecker && arrayChecker) {
        const averageCalculated = average(arr);
        const minCalculated = Math.min(...arr);
        const maxCalculated = Math.max(...arr);
        const lengthCalculated = arr.length;
        return {
            average: averageCalculated,
            min: minCalculated,
            max: maxCalculated,
            length: lengthCalculated
        }
    } else {
        return "not an array or not all values passed in array are numbers"
    }
}

function average(arr) {
    return arr.reduce((a, b) => (a + b)) / arr.length
}