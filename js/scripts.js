//back

var result = [];
var numerals = ["I", "V", "X", "L", "C", "D", "M"];
var convert = function(number) {
  result = [];
  if (number > 0 && number < 4) {
    for (var i =0; i < number; i++) {
      result.push(numerals[0]);
    }
  } else if (number >= 4 && number < 9) {
    if (number === 4) {
      result.push(numerals[0] + numerals[1])
    } else {
      result.push(numerals[1]);
      if (number < 9) {
        for (var i = 5; i < number; i++) {
          result.push(numerals[0]);
        }
      }
    }
  } else if (number >= 9) {
    if (number === 9) {
      result.push(numerals[0] + numerals[2]);
    } else {
      result.push(numerals[2]);
      if (number < 14) {
        for (var i = 10; i < number; i++) {
          result.push(numerals[0]);
        }
      }
    }
  }
}

//front
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());

    convert(number);
    console.log(result.join(""));
  });
});
