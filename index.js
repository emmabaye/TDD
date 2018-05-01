/*
*Code Challenge*

*You are to square every digit of a number.*

For example, if we run 9119 through the function, 811181 will come out, because `9 square` is 81 and `1 square` is 1.

*_Note: The function accepts an integer and returns an integer_*
*/

 export let squareNumbers = (num) => {
    if(!Number.isInteger(num)){
      return "Input is not an integer";
    }
    
    let arrOfNumbers = num.toString().split('');
    let squareArrofNumbers = arrOfNumbers.map((elem) => elem * elem);
    let result = parseInt(squareArrofNumbers.join(''), 10);
    
    return result;
  }
  
  console.log(squareNumbers(123456789));