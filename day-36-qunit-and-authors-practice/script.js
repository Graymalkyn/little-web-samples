'use strict';
if (this.QUnitPractice === undefined) this.QUnitPractice = {};

(function(context) {


  var authors = [
    { name: 'Andrew Murray', language: 'English', publishedWorks: 240 },
    { name: 'Muhammad Muhiyyudin Ibn ul Arabi', language: 'Arabic', publishedWorks: 240 },
    { name: 'Jallaludin Suyuti', language: 'Arabic', publishedWorks: 700 },
    { name: 'Abu Hamid Al Ghazali', language: 'Arabic', publishedWorks: 200 },
    { name: 'Isaac Asimov', language: 'English', publishedWorks: 506 },
    { name: 'Jacob M. Appel', language: 'English', publishedWorks: 200 },
    { name: 'Meish Goldish', language: 'English', publishedWorks: 300 },
    { name: 'Kyokutei Bakin', language: 'Japanese', publishedWorks: 470 },
    { name: 'Ursula Bloom', language: 'English', publishedWorks: 500 },
    { name: 'Enid Blyton', language: 'English', publishedWorks: 600 },
    { name: 'Barbara Cartland', language: 'English', publishedWorks: 722 },
    { name: 'Darya Dontsova', language: 'Russian', publishedWorks: 140 },
    { name: 'Alexandre Dumas', language: 'French', publishedWorks: 277 },
    { name: 'Jacob Neusner', language: 'English', publishedWorks: 950 },
    { name: 'Georges Simenon', language: 'French', publishedWorks: 500 }
  ];

//Used to filter by languageof all authors
  function filterByLanguage(language){
    var filteredAuthors = [];
    for (var author of authors) {
      if (author.language === language) {
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors;
  }

//Pulls Arabic writers
  function arabicAuthorsCount() {
  var filteredAuthors = filterByLanguage('Arabic');
  return filteredAuthors.length;
  }

//pulls Russian writers
  function russianAuthorsCount(){
    var filteredAuthors = filterByLanguage('Russian');
    return filteredAuthors.length;
  }


  function busyBees(){
    var filteredAuthors = [];
    for (var author of authors){
      if (author.publishedWorks > 500){
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors.length;
  }

  function mostWorks(){
    var workCount = 0;
    for (var author of authors){
      if (author.publishedWorks > workCount){
        workCount = author.publishedWorks;
        var authorName = author.name;
      }
    }
    return authorName;
  }

//filters by first letter of author's name
  function beginsWithLetter(letter){
    var filteredAuthors = [];
    for (var author of authors){
      if (author.name.indexOf(letter) === 0){
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors;

  }

//authors whose name begins with A
  function beginsWithA(){
    var filteredAuthors = beginsWithLetter('A');
    return filteredAuthors.length;
  }

//authors whose name begins with K
  function beginsWithK(){
    var filteredAuthors = beginsWithLetter('K');
    return filteredAuthors.length;
  }


//totals published works of all authors
  function totalWorks(arr){
    var total = 0;
    for (var author of arr) {
      total += author.publishedWorks;
    }
    return total;
  }

  //averages by language
  function averageByLanguage(language){
    var filteredAuthors = filterByLanguage(language);
    var workCount = totalWorks(filteredAuthors);
    return workCount / filteredAuthors.length;
  }

  //average of all authors
  function allAuthorsAvg(){
    return totalWorks(authors) / authors.length;
  }

  //average of English authors
  function englishAuthorsAvg(){
    return averageByLanguage('English');
  }

  //average of Japanese authors
  function japaneseAuthorsAvg(){
    return averageByLanguage('Japanese');
  }


  context.arabicAuthorsCount = arabicAuthorsCount;
  context.russianAuthorsCount = russianAuthorsCount;
  context.busyBees = busyBees;
  context.mostWorks = mostWorks;
  context.beginsWithA = beginsWithA;
  context.beginsWithK = beginsWithK;
  context.allAuthorsAvg = allAuthorsAvg;
  context.englishAuthorsAvg = englishAuthorsAvg;
  context.japaneseAuthorsAvg = japaneseAuthorsAvg;


})(window.QUnitPractice);
