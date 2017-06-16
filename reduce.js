function countWords(inputWords) {
  //maybe write it with for loop first??
  //reduce takes two Arguments
  //  1. callback,
  //  2. object -- starting point
  //  callback takes two ags -- prev, curr

  //each key is the string
  //each value is the number of times the string is present.
      //filter the whole array by curr to find how many times each word is present



  var output = inputWords.reduce(function(countObj, word) {
    //countObj = accumulator
    //word = current string from inputWords
    console.log('countObj', countObj);
    console.log('word', word);
    var filtered = inputWords.filter(function(str) { return str == word });
    console.log('filtered', filtered);

    //on each iteration a new key/value pair is added to accumulator
      //key will be the currentValue
      //word will be the length of filtered array based on currentValue
    countObj[word] = filtered.length;

    return countObj;//this is what the callback returns on ever iteration
  }, {});

  console.log('output',output);
  return output;//this is what countWords returns
}

module.exports = countWords
