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