// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(sentence) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const sanitizedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
    const uniqueLetters = new Set(sanitizedSentence);
    return uniqueLetters.size === alphabet.length;
  }

//   Reverse polish notation calculator Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

// For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

// For your convenience, the input is formatted such that a space is provided between every token.

// Empty expression should evaluate to 0.

// Valid operations are +, -, *, /.

// You may assume that there won't be exceptional situations (like stack underflow or division by zero).

function calc(expr) {
    if (!expr) {
        return 0;
      }
    
      const stack = [];
      const operators = new Set(['+', '-', '*', '/']);
    
    
      expr.split(' ').forEach(token => {
        if (!isNaN(token)) {
          console.log(token)
          stack.push(Number(token));
          
        } else if (operators.has(token)) {
          const b = stack.pop();
          const a = stack.pop();
      
          if (token === '+') {
            stack.push(a + b);
          } else if (token === '-') {
            stack.push(a - b);
          } else if (token === '*') {
            stack.push(a * b);
          } else if (token === '/') {
            stack.push(a / b);
          }
        }
      });
    
      return stack[0];
    }

    // sum below 10 Multiples of 3 or 5

    function solution(number){
      let sum= 0  
       for(let i=1; i<number; i++){
         if(i%5===0 || i%3===0){  
           sum = sum +i
          
          }
         }
       
       return sum
       }
     
      //  Stop gninnipS My sdroW!

      function spinWords(string){
        return  string.split(' ')
            .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
            .join(' ');
        }

        
//         Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOddOccurrence(arr) {
  let result = 0;
  for (let num of arr) {
    result ^= num;
  }
  return result;
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x));
}


// DESCRIPTION:
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)





function findOutlier(integers){
  const arrodd=[]
  const arreven=[]
  integers.map(x=>{
    
    if(x%2===0){
      arreven.push(x)
} else if(x%2!=0){
   arrodd.push(x)
}
  })
  
if(arrodd.length===1){
  return arrodd[0]
}else {
  return arreven[0]
}
}