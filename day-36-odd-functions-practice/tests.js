QUnit.test('Define a function that takes two numbers as arguments and returns the largest of them.', function(assert){
  var a = 5;
  var b = 7;
  var result = max(a, b);
  assert.equal(result, 7, 'The max number is incorrect.');
});

QUnit.test('define the largest of 3 numbers.', function(assert){
  var num1 = 3;
  var num2 = 5;
  var num3 = 7;
  var result = maxOfThree(num1, num2, num3);
  assert.equal(result, 7, 'Not the largest number');
})

QUnit.test('Determine if letter is a vowel.', function(assert){
  var char = 'm';
  var result = isVowel(char);
  assert.equal(result, false, 'This letter is a vowel')
});

QUnit.test('Write a function that will double every consonant and place an occurrence of "o" in between.', function(assert){
  var phrase = 'rovarspraket';
  var result = rovarspraket(phrase);
  assert.equal(result, 'rorovovarorsospoprorakoketot', 'Not the correct word.')
});


QUnit.test('Sum function can sum array of integers.', function(assert){
  var ints = [1, 2, 4, 15, 24];
  var result = sum(ints);
  assert.equal(result, 46, 'The sum was incorrect');
});

QUnit.test('Multiply two integers.', function(assert){
  var ints = [5, 6];
  var result = multiply(ints);
  assert.equal(result, 30, 'The sum was incorrect');
});

QUnit.test('Define a function that computes the reversal of a string.', function(assert){
  var string = "Dr Pepper";
  var result = reverse(string);
  assert.equal(result, "reppeP rD", 'That is not correct');
});

QUnit.test('Write a function that takes an array of words and returns the length of the longest one.', function(assert){
  var words = ['coke', 'pepsi', 'mountain dew', 'big red', 'root beer'];
  var result = findLongestWord(words);
  assert.equal(result, 12, 'Thats not the length of the longest word')
});

QUnit.test('Takes an array of words and an integer i and returns the array of words that are longer than i.', function(assert){
  var i = 8
  var words = ['coke', 'pepsi', 'mountain dew', 'big red', 'root beer'];
  var result = filterLongWords(words, i);
  assert.deepEqual(result, ['mountain dew', 'root beer'], 'Thats not the length of the longest word')
});

QUnit.test('Write a function that takes a string and builds a frequency listing of the characters contained in it.', function(assert){
  var string = 'abacababba'
  var result = charFreq(string)
  assert.equal(result.a, 5, 'Not the correct count');
  assert.equal(result.b, 4, 'Not the correct count');
  assert.equal(result.c, 1, 'Not the correct count');
});
