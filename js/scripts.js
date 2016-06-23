//back

var result = [];
var parsedNum = [];
var numerals = ["I", "V", "X", "L", "C", "D", "M"];
var convert = function(number) {
  result = [];
  var translate = function(number, min, max, symbol, secondary) {
    if (number > min && number < max- 5) {
      for (var i = min; i < number; i++) {
        result.push(secondary); //NOT SURE
      }
    } else if (number >= max - 5 && number < max) {
      if (number === max - 5) {
        result.push(secondary + symbol)
      } else {
        result.push(symbol);
        if (number < max) {
          for (var i = max - 4; i < number; i++) {
            result.push(secondary);
          }
        }
      }
    }
  }

  translate(number, 0, 9, 'V', "I");


}

//front
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var number = $("input#number").val().split("");

    for (i = 0; i < number.length; i++) {
      parsedNum.unshift(parseInt(number[i]));
    }
    console.log(parsedNum);

    // parsedNum = parseInt(number);
    //
    // debugger;
    convert(number);
    console.log(result.join(""));
  });
});





// if (number > 0 && number < 4) {
//   for (var i =0; i < number; i++) {
//     result.push(numerals[0]);
//   }
// } else if (number >= 4 && number < 9) {
//   if (number === 4) {
//     result.push(numerals[0] + numerals[1])
//   } else {
//     result.push(numerals[1]);
//     if (number < 9) {
//       for (var i = 5; i < number; i++) {
//         result.push(numerals[0]);
//       }
//     }
//   }
// } else if (number >= 9) {
//   if (number === 9) {
//     result.push(numerals[0] + numerals[2]);
//   } else {
//     result.push(numerals[2]);
//     if (number < 14) {
//       for (var i = 10; i < number; i++) {
//         result.push(numerals[0]);
//       }
//     }
//   }
// }
