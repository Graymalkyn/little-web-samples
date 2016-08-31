
// QUnit.test('name of test', function(assert){
//
// });

//Create a function that will sum any array of integers.
QUnit.test('Sum function can sum array of integers.', function(assert){
  var ints = [1, 2, 4, 15, 24];
  var result = DataManipulator.sum(ints);
  assert.equal(result, 46, 'The sum was incorrect');
});

QUnit.test('SumOfNumbersOver10 can sum array of integers, ignoring small numers', function(assert){
  var ints = [8, 10, 14, 4, 6, 23];
  var result = DataManipulator.SumOfNumbersOver10(ints);
  assert.equal(result, 37, 'Sum of large numbers incorrect');
});

QUnit.test('SumOfNumbersOverN can sum an array of integers, ignoring numbers smaller than N', function(assert){
  var ints = [34, 5, 24, 20, 8, 17];
  var result = DataManipulator.SumOfNumbersOverN(ints, 18);
  assert.equal(result, 78, 'Sum of numbers over N')

})
