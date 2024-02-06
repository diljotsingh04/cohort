/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = numbers[0];
    for(i of numbers){
        largest = Math.max(largest, i);
    }
    return largest;
}

// console.log(findLargestElement([1,2,34,3,4,3]));

module.exports = findLargestElement;