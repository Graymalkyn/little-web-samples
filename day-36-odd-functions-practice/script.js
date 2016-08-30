'use strict';

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b){
  if (a > b){
      return a;
    }
    else {
      return b;
    }
  }


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
    return Math.max(num1, num2, num3);
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'y'){
      return true;
    }
    else {
      return false;
    }
}

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------


function rovarspraket(phrase){
    var newPhrase = '';
    for (var i=0; i<phrase.length; i++) {
      if (phrase[i] !== 'a' && phrase[i] !== 'e' && phrase[i] !== 'i' && phrase[i] !== 'o' && phrase[i] !== 'u' && phrase[i] !== 'y'){
        var rovarspraketPhrase = newPhrase += phrase[i] + 'o' + phrase[i];
        }
        else {
          rovarspraketPhrase = newPhrase += phrase[i];
        }
      }
    return rovarspraketPhrase;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------
function sum(integers){
  var sum = 0;
  for (var i=0; i<integers.length; i++){
    sum += integers[i];
  }

  return sum;
}

function multiply(integers){
  var sum = 1;
  for (var i=0; i<integers.length; i++){
    sum = sum * integers[i];
  }

  return sum;

}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
  var backerds = '';
  for (var i=string.length-1; i>=0; i--) backerds += string[i];
  return backerds;
    // return string.split("").reverse().join("");
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var longest = 0;
  for (var i = 0; i < words.length; i++) {
    if (longest < words[i].length) {
      longest = words[i].length;
    }
  }
  return longest;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  var longerThan = i;
  var newArray = [];
  for (var x = 0; x < words.length; x++) {
    if (longerThan < words[x].length) {
        newArray.push(words[x]);
      }
  }
  return newArray;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  var freq = {};
  for (var i=0; i<string.length; i++){
    var letter = string[i];
    if (freq[letter] === undefined){
      freq[letter] = 1;
    }
    else {
      freq[letter] = freq[letter] + 1;
    }
  }
  // var letter = {};
  // for (var i=0; i<string.length; i++){
  //   letter[string[i]] = ++letter[string[i]]||1;
  // }
  return freq;
}
