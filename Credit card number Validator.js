//Credit card number validator

var num1 = parseInt(prompt("Number 1?"));
var num2 = parseInt(prompt("Number 2?"));
var num3 = parseInt(prompt("Number 3?"));
var num4 = parseInt(prompt("Number 4?"));
var num5 = parseInt(prompt("Number 5?"));
var num6 = parseInt(prompt("Number 6?"));
var num7 = parseInt(prompt("Number 7?"));
var num8 = parseInt(prompt("Number 8?"));
var num9 = parseInt(prompt("Number 9?"));
var num10 = parseInt(prompt("Number 10?"));
var num11 = parseInt(prompt("Number 11?"));
var num12 = parseInt(prompt("Number 12?"));
var num13 = parseInt(prompt("Number 13?"));
var num14 = parseInt(prompt("Number 14?"));
var num15 = parseInt(prompt("Number 15?"));
var num16 = parseInt(prompt("Number 16?"));
//Step 1 complete.

func1(); // Step 2 complete.


//This is the main part of the program.
function func1() {
  var add = num2 + num4 + num6 + num8 + num10 + num12 + num14 + num16;
  var numbers2 = [num1, num3, num5, num7, num9, num11, num13, num15];
  var newNum;
 /* All the variables are declared before so they won't become retricted to certain loops. */

  for(i = 0; i < numbers2.length; i++) {
   var t = numbers2[i] * 2;
    if (t === 10) {
       newNum = 1;
    }
    else if (t === 12) {
      newNum = 3;
    }
    else if (t === 14) {
      newNum = 5;
    }
    else if (t === 16) {
      newNum = 7;
    }
    else if (t === 18) {
      newNum = 9;
    }
    else {
      newNum = t;
    }
    add = add + newNum;
  }
   if (add % 10 === 0) {
     alert("Valid number");
   }
   else {
     alert("Invalid number");
   }
}
// Step 3 complete.
