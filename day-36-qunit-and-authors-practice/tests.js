
QUnit.test( 'Count of authors who wrote in Arabic.', function( assert ) {
  var filtered = QUnitPractice.arabicAuthorsCount();
  assert.deepEqual(filtered, 3, 'Should have returned three results.' );
});

QUnit.test( 'Count of authors who wrote in Russian.', function( assert ) {
  var filtered = QUnitPractice.russianAuthorsCount();
  assert.deepEqual(filtered, 1, 'Should have returned one result.' );
});

QUnit.test('Count the number of authors who wrote over 500 books.', function(assert){
  var manyBooks = QUnitPractice.busyBees();
  assert.equal(manyBooks, 5, 'Should have returned five results.');
});

QUnit.test('The author with the most published words', function(assert){
  var mostWorks = QUnitPractice.mostWorks();
  assert.equal(mostWorks, 'Jacob Neusner', 'Not the most proficient author.');
});

QUnit.test('Count of the authors whose name begins with the letter A', function(assert){
  var beginsWithA = QUnitPractice.beginsWithA();
  assert.equal(beginsWithA, 3, 'Does not begin with A')
});

QUnit.test('Count of the authors whose name begins with the letter K', function(assert){
  var beginsWithK = QUnitPractice.beginsWithK();
  assert.equal(beginsWithK, 1, 'Does not begin with K')
});

QUnit.test('Compute the average number of published works', function(assert){
  var allAuthorsAvg = QUnitPractice.allAuthorsAvg();
  assert.equal(allAuthorsAvg,
436.3333333333333,'incorrect average');
});

QUnit.test('Compute the average number of published works by English authors', function(assert){
  var englishAuthorsAvg = QUnitPractice.englishAuthorsAvg();
  assert.equal(englishAuthorsAvg, 502.25,'incorrect average');
});

QUnit.test('Compute the average number of published works by Japanese authors', function(assert){
  var japaneseAuthorsAvg = QUnitPractice.japaneseAuthorsAvg();
  assert.equal(japaneseAuthorsAvg, 470,'incorrect average');
});



//Write tests to get these bits of data, and then write the functions to return that data to pass the tests
/*

* Count the number of English writers
* Count the number of Russian writers
* Count the number of authors who wrote over 500 books
* The author with the most published works
* Count of the authors whose name begins with the letter 'A'
* Count of the authors whose name begins with the letter 'K'
* Compute the average number of published works
* Compute the average number of published works by English authors
* Compute the average number of published works by Japanese authors

*/
