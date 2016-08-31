'use strict';

if (window.DataManipulator === undefined) window.DataManipulator = {};

(function(DM){

  function sumFunction(integers){
    return sum(integers);
    // var sum = 0;
    // for (var i=0; i<integers.length; i++){
    //   sum += integers[i];
    // }
    //
    // return sum;
  }

  function sumOver10(integers){
    return sum(integers, 10);
    // var sum = 0;
    // for (var i=0; i<integers.length; i++){
    //   if (integers[i] > 10) {
    //     sum += integers[i];
    //   }
    //
    // }
    //
    // return sum;
  }

  function sumOverN(integers, n){
    return sum(integers, n);
  }

  function sum(integers, n){
    var sum = 0;
    for (var i=0; i<integers.length; i++){
      if (n === undefined) {
        sum += integers[i];
      }
      else if (integers[i] > n){
        sum += integers[i];
      }
    }

    return sum;
  }



  DM.sum = sum;
  DM.SumOfNumbersOver10 = sumOver10;
  DM.SumOfNumbersOverN = sumOverN;

})(window.DataManipulator);
