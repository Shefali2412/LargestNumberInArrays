// Monday: Largest Number in Arrays

// ALgorithm:
// I/O: array of arrays
// O/P: single array
//  make a function
// inside function initialize an empty array to store the largest numbers,
// make a for loop ,
// then initialize the largest with the first element of the sub-array
// make another for loop
// then use if to update largest number
// return result
// print array


function largestOfFour(arr) {
    let result = [];

    for(let i = 0; i < arr.length; i++)
    {
        let largest = arr[i][0];

        for(let j = 1; j < arr[i].length; j++)
        {
            if(arr[i][j] > largest){
                largest = arr[i][j];

            }
        }
        result.push(largest);
    }
    
    return result;
  }
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  //Returns [5,27,39,1001]
  