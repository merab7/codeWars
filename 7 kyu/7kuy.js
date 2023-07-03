function disemvowel(str) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let arr = str.split('');
  let result = [];

  arr.map((x) => {
    let lowerCaseX = x.toLowerCase(); 
    if (!vowels.includes(lowerCaseX)) {
      result.push(x);
    }
  });

  return result.join('');
}