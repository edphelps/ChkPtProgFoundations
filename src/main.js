// Write a for loop that will print only even numbers from an array:
// For example: question0([ 5, 20, 11, 42, 2, 19 ]) >> [ 20, 42, 2 ]

function question0 (array) {
  for(var i in array) {
    if (array[i]%2===0)
      console.log(array[i].toFixed());
  }
}

// Write a for loop that doubles each number in the following array. If the
// resulting number is greater than 12, print it to the console:
// For example: [ 2, 4, 8, 16 ] would print the numbers 16 and 32

function question1 (array) {
  for(var i in array) {
    if (12<array[i]*2)
      console.log((array[i]*2).toFixed());
  }  
}

// Write a for loop to iterate over every element in the following array:
// [ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]
//
// Using a switch statement, do the following:
// - If the day is on a weekend, print "Yay, it's the weekend!"
// - If the day is Friday, print "Almost there..."
// - If the day is Monday, print "I hate Mondays more than Garfield."
// - Otherwise, print "Everybody's working for the weekend."

function question2 (array) {
  for(var dow in array) {
    switch(array[dow]) {
      case "Mon":
        console.log("I hate Mondays more than Garfield.");
        break;
      case "Fri":
        console.log("Almost there...");
        break;
      case "Sat":
      case "Sun":
        console.log("Yay, it's the weekend!");
        break;      
      default:
        console.log("Everybody's working for the weekend.");
    }
  }
}

function test() {
  question0([ 5, 20, 11, 42, 2, 19 ]);
  question1([ 2, 4, 8, 16 ]);
  question2([ 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun' ]);
}


module.exports = { question0, question1, question2 }
