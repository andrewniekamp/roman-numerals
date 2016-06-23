//back
var number = [];
var result = [];
var parsedNum = [];
var numerals = ["I", "V", "X", "L", "C", "D", "M"];

var translate = function(number, min, max, symbolIndex) {
  if (number > min && number < max- 5) {
    for (var i = min; i < number; i++) {
      result.push(numerals[symbolIndex - 1]); //NOT SURE
    }
  } else if (number >= max - 5 && number < max) {
    if (number === max - 5) {
      result.push(numerals[symbolIndex - 1] + numerals[symbolIndex])
    } else {
      result.push(numerals[symbolIndex]);
      if (number < max) {
        for (var i = max - 4; i < number; i++) {
          result.push(numerals[symbolIndex - 1]);
        }
      }
    }
  } else {
    result.push(numerals[symbolIndex - 1] + numerals[symbolIndex + 1] )
  }
}

var convert = function(number) {
  result = [];
  if (number.length === 2) {
    translate(number[0], 0, 9, 1);
    //need to join the result so it isn't overriden
    translate(number[1], 0, 9, 1);
  } else if (number.length === 1) {
    translate(number[0], 0, 9, 1);
  }
}

//front
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    number = [];
    var numberInput = $("input#numberInput").val().split("");

    for (i = 0; i < numberInput.length; i++) {
      number.push(parseInt(numberInput[i]));
    }
    console.log(number);

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
