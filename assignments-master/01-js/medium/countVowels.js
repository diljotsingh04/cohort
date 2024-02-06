/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let set = new Set(['a','e','i','o','u', 'A','E','I','O','U']);
    let count = 0;
    for(let i of str){
      if(set.has(i)){
        count++;
      }
    }
    return count;
}

// console.log(countVowels('Coding is fun!!!'));

module.exports = countVowels;