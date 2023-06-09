// Sum of differences in array
// DESCRIPTION:
// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

function sumOfDifferences(arr) {
    if (arr.length <= 1) {
      return 0;
    }
    const differences = arr.sort((a, b) => b - a).map((value, i) => (i < arr.length - 1) ? Math.abs(value - arr[i + 1]) : 0);
    return differences.reduce((acc, cur) => acc + cur, 0);
  }

//   Total pressure calculation
solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    const T = temp + 273.15
    const TR = 0.082 * T;
    const totalMass = (givenMass1 / molarMass1) + (givenMass2 / molarMass2);
    const totalPressure = totalMass * TR / volume;
  
    return totalPressure;
  
  }
  

//   Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
   
    return  Math.abs((dadYearsOld-sonYearsOld)*2-dadYearsOld)
  
  }

//   Pillars
//   DESCRIPTION:
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(numPill, dist, width) {
    let distCm = dist * 100;
    let distance = ((numPill - 1) * distCm) + ((numPill - 2) * width);
    if(numPill>1){
      return distance
    } else if(numPill===1){
      return 0
    }
   
   }   

//    i can use in this example Math.max(...pillars.) or Math.min()
//    )