
//Credit card number generator



func1(); //Calling the function.

//Writing the function
function func1() {

//Because Math.random only shows numbers between 0 and 1 and we want integers.  
var num1 = Math.floor(Math.random() * 10);
var num2 = Math.floor(Math.random() * 10);
var num3 = Math.floor(Math.random() * 10);
var num4 = Math.floor(Math.random() * 10);
var num5 = Math.floor(Math.random() * 10);
var num6 = Math.floor(Math.random() * 10);
var num7 = Math.floor(Math.random() * 10);
var num8 = Math.floor(Math.random() * 10);
var num9 = Math.floor(Math.random() * 10);
var num10 = Math.floor(Math.random() * 10);
var num11 = Math.floor(Math.random() * 10);
var num12 = Math.floor(Math.random() * 10);
var num13 = Math.floor(Math.random() * 10);
var num14 = Math.floor(Math.random() * 10);
var num15 = Math.floor(Math.random() * 10);
var num16 = Math.floor(Math.random() * 10);


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
     document.write("credit card number: " + num1 + num2 + num3 + num4 + " " + num5 + num6 + num7 + num8 + " " + num9 + num10 + num11 + num12 + " " + num13 + num14 + num15 + num16);
   }
   else {
     func1();
   }
}
