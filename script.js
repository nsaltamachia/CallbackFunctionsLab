
// Exercise 1
/*
function writeDing() {
    console.log("Ding!");
}
    let timerId = setTimeout(writeDing, 3000);
*/







// Exercise 2
// Write the sorting callback as a named function declaration
/*
// Solution 1
function sortByLength(a, b) { }

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

function sortByLength(a, b) {
    return a.length - b.length;
}
words.sort(sortByLength);
console.log(words);
*/
/*
// Solution 2
const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];
const checkLength = (a, b) => { return a.length - b.length };
words.sort(checkLength);
console.log(words);
*/






/*
// Exercise 3

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];
const longWords = words.filter(function (word) { return word.length >= 7});
console.log(longWords)
*/






/*
// Exercise 4
// Code a forEach method:
// 		1. Write a function named forEach.
//		2. The forEach function accepts two args, an array & a callback.
//		3. Code the forEach method such that it iterates over each element in the array arg (use a for loop).

//		4. For each iteration, invoke the callback arg, passing to it, the element and the index of the element.

// Test with this array
const colors = ['red', 'green', 'blue', 'purple'];
// and this callback
function log(elem, idx) {
    console.log(`Index: ${idx} / Element Value: ${elem}`)
}

const forEach = (arr, cb) => {
    for (i = 0; i < arr.length; i++) {
        cb(arr[i], i)
    }
 }
forEach(colors, log);
*/


/*
// Exercise 5
function step1(cb) {
  setTimeout(function() {
    console.log('STEP 1 COMPLETE');
    cb()
  }, 750);
}

function step2(cb) {
  setTimeout(function() {
    console.log('STEP 2 COMPLETE');
    cb()
  }, 500);
}
	
function step3(cb) {
  setTimeout(function() {
    console.log('STEP 3 COMPLETE');
    cb()
  }, 250);
}
*/

/////////////////////////////////////// solution 1
/*
function logFin() {
    console.log("FINISHED")
}

function callInOrder() {
    step1();
    setTimeout(step2, 251);
    setTimeout(step3, 502);
    setTimeout(logFin, 754);
}
callInOrder();
*/
/*
////////////////////////////////////// Solution 2
step1(function() {
    step2(function() {
        step3(function() {
            console.log("FINISHED")
        });
    });
});
*/


/*
The above functions are working asynchronous functions - DO NOT
change any of their code. They are what we call "black boxes"
because we do not need to know anything that goes on inside of them.

Each of the three functions accept a single argument - a callback function.

Write the code that invokes the three functions such that the output in the console will be:

STEP 1 COMPLETE
STEP 2 COMPLETE
STEP 3 COMPLETE
FINISHED

Hints: 
- Call `step1` first.
- You cannot call `step2` until after `step1` has "finished", similarly, you cannot call `step3` until `step2` has "finished".
- You must console.log the last line of the output, `FINISHED`, after `step3` has "finished".
*/







//BONUS
/*
Write function named countdown that accepts as an arg the starting number of seconds and console.logs the count down to zero one second apart from each other.

For example:
countdown(3);

console.logs something like the following:

Count: 3
Count: 2
Count: 1
Count: 0


/////////////////////////////////////// Solution 1
/*
function countdown(arg) {
    console.log(`Count: ${arg}`);
    
    if (arg > 0) {
        setTimeout(function () {
        countdown(arg - 1);
        }, 1000)
    }
    }
countdown(3);
*/

///////////////////////////////////// Solution 2

const countdown = (count) => { 
    let timer = setInterval(function (){
        if (count >= 0) {
            console.log(`Count: ${count}`)
            count--;
        } else clearInterval(timer);
            
    }, 1000)
    
}
countdown(5);
