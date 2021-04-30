const numStrMap = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
};

//create obj map for where key = num and value = phonetic equivalent
//create function that takes in array of nums
//map through the array of nums
//change each num to array of strings
//edge case - if the num is a single integer - find matching value & add to result
//else for each num string concat and store in helper variable
//if its the last element push the helper variable's value into result
//after the mapping is done take the result array and join with a ','

const numStrConverter = (intArray) => {
  const result = [];

  intArray.map((num) => {
    const numSplit = num.toString().split('');
    let numPhonetic = '';

    if (numSplit.length === 1) {
      result.push(numStrMap[numSplit]);
    } else {
      numSplit.forEach((n, i) => {
        numPhonetic = numPhonetic.concat('', numStrMap[n]);

        if (i === numSplit.length - 1) {
          return result.push(numPhonetic);
        }
      });
    }
  });

  return result.join(',');
};

console.log(numStrConverter([3, 25, 209]));
//get argument from command line using process.argv slice
