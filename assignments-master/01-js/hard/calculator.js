/*
  Implement a class `Calculator` having below methods
    - initialise a this.result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the this.result
    - subtract: takes a number and subtracts it from the this.result
    - multiply: takes a number and multiply it to the this.result
    - divide: takes a number and divide it to the this.result
    - clear: makes the `this.result` variable to 0
    - getthis.Result: returns the value of `this.result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its this.result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
    constructor(){
      this.result = 0;
    }
    add(num){
      this.result += num;
    }
    subtract(num){
      this.result -= num;
    }
    multiply(num){
      this.result *= num;
    }
    divide(num){
      if(num == 0){
        throw new Error("Error");
      }
      this.result /= num;
    }
    clear(){
      this.result = 0;
    }
    getResult(){
      return this.result;
    }
    calculate(str){
        const str1 = str.replace(/\s+/g, '');
        const isValidExpression = /^[\d\s+\-*\/()./0]+$/g.test(str1);

        if(!isValidExpression){
          throw new Error("Invalid Expression");
        }
        try{
          this.result = eval(str1);
          if (!isFinite(this.result)) {
            throw new Error("Division by zero or other arithmetic errors");
        }
        }
        catch(error){
          throw new Error("Error");
        }
    }
}

let calc = new Calculator();

// calc.add(6);
// console.log(calc.getResult());

module.exports = Calculator;
