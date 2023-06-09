// Longest Common Subsequence
// Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

// Subsequence
// A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

// Example subsequence
// Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

// LCS examples
// LCS( "abcdef" , "abc" ) => returns "abc"
// LCS( "abcdef" , "acf" ) => returns "acf"
// LCS( "132535365" , "123456789" ) => returns "12356"
// Notes
// Both arguments will be strings
// Return value must be a string
// Return an empty string if there exists no common subsequence
// Both arguments will have one or more characters (in JavaScript)
// All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".
// Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

// Note that the OCaml variant is using generic lists instead of strings, and will also have randomized tests (any longest common subsequence will be valid).

// Tips
// Wikipedia has an explanation of the two properties that can be used to solve the problem:
function LCS(x, y) {
    const m = x.length;
    const n = y.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(''));
  
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (x[i - 1] === y[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + x[i - 1];
        } else {
          dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
        }
      }
    }
  
    return dp[m][n];
  }

//   The Hashtag Generator

  function generateHashtag(str) {
    if (str.trim() === '') {
      return false;
    }
  
    const words = str.trim().split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    const hashtag = '#' + capitalizedWords.join('');
  
    if (hashtag.length > 140) {
      return false;
    }
  
    return hashtag;
  }