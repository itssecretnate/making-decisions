////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

//CODE HERE
let lovesCode = false;

// Answer:
if(lovesCode === true) console.log("I love to code!");
else if(lovesCode === false) console.log("Coding has its challenges.");
else console.log("lovesCode did not meet the previous criteria");

// Altnerate way #1
if(lovesCode) console.log("I love to code!");
else if(!lovesCode) console.log("Coding has its challenges.");
else console.log("lovesCode did not meet the previous criteria");

// Alternate way #2
if(lovesCode === true) console.log("I love to code!");
else if(lovesCode !== true) console.log("Coding has its challenges.");
else console.log("lovesCode did not meet the previous criteria");

// Alternate way #3
if(lovesCode !== false) console.log("I love to code!");
else if(lovesCode === false) console.log("Coding has its challenges.");
else console.log("lovesCode did not meet the previous criteria");

// Alternate way #4 (I don't like this way because it doesn't check if the value is false)
if (lovesCode) console.log("I love to code!");
else console.log("Coding has its challenges.");

// For problems 2-3 use the following lines of code:
var amysAge = 29
var brittanisAge = 34
var amysBirthYear = 1991
var brittanisBirthYear = 1986

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
if(amysAge === brittanisAge) console.log("Amy and Birttan are the same age.");
else if(amysAge > brittanisAge) console.log("Amy is older than Brittan.");
else if(amysAge < brittanisAge) console.log("Brittan is older than Amy.");
else console.log("Not sure who is older. :(");

////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

//CODE HERE
if(amysBirthYear === brittanisBirthYear) console.log("Amy & Brittani were born in the same year");
else console.log("Amy & Brittani were not born in the same year");

////////// PROBLEM 4 //////////

let temperature = 55
let rain = true

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  
  
  If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. 
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. 
  
  If it is 60 degrees or below, one should wear a jacket and carry an umbrella.
  
  *Come up with your own clothing suggestions based on those temperature parameters when it is not raining.*
  */
 

//CODE HERE

// If it is raining
if(rain) {
  if(temperature >= 80) console.log("One should wear a t-shirt and take an umbrella.")
  else if(temperature > 60 && temperature < 80) console.log("One should wear a rain-jacket.");
}

// If it's not raining (My own clothing suggetions)
if(!rain) {
  if(temperature <= 32) console.log("You should wear a winter coat today. It looks like it's below freezing!");
  else if(temperature >= 70) console.log("You should wear a t-shirt today. It appears to be warm!");
  else if(temperature > 32) console.log("You should wear a long sleeve shirt. It's chilly!");
}

// We don't know if it's raining.
else if(temperature <= 60 && temperature > 32) console.log("One should wear a jacket and carry an umbrella.");
else console.log("I'm not sure what you should wear today...");

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE
for(let i = 0; i < 10; i++) {
  console.log("hello");
}


////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

//CODE HERE

// One way of handling it.
for(let i = 1; i <= 10; i++) {
  console.log(i);
}

// Altnerative way.
for(let i = 0; i < 10; i++) {
  console.log(i+1);
}

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE

// Answer
for(let i = 10; i >= 0; i--) {
  console.log(`Reverse Iteration: ${i}`);
}



let score = 0
let passingScore = 7


////////// PROBLEM 8 //////////

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. 
  In each iteration of the loop, increase the score by one. 
  If your code is successful, you will see your logged statement 7 times.
*/

//CODE HERE
while(score < passingScore) {
  console.log("Your score is not high enough.");
  score++;
}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, 
  if it is true, change the status to false, 
  if it is false, change the status to true.
*/

//CODE HERE

let changeMyMind = false;

// Answer #1
if(changeMyMind) {
  changeMyMind = false;
  console.log(`Changed my mind to ${changeMyMind}`);
}
else if(!changeMyMind) {
  changeMyMind = true;
  console.log(`Changed my mind to ${changeMyMind}`);
}

changeMyMind = false; //Used to set variable back to true for alternative way. You can comment this out to see the alternatve answer reverse the variable.

// Alternative Answer
if(changeMyMind) {
  changeMyMind = !changeMyMind;
  console.log(`Changed my mind to ${changeMyMind}`);
}
else if(!changeMyMind) {
  changeMyMind = !changeMyMind;
  console.log(`Changed my mind to ${changeMyMind}`);
}


////////// PROBLEM 10 //////////
// Try to change the value of changeMyMind (irrespective of whether it is true or false) and then console.log it's new status. It should log true. Hint: use the not operator.

//CODE HERE

// Answer #1
let origChangeMyMind = changeMyMind; //Track what the original variable is before changing my mind.

changeMyMind = !changeMyMind
console.log(`Changed my mind to ${changeMyMind} from ${origChangeMyMind}`);


////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5
// Create a while loop that continues to run while z is greater than 0. 
//Within the while loop, log a countdown from the value of z to 1. 
//Once you have logged the countdown, make sure you decrement z by 1. 
//If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE

while(z > 0) {
  for(let i = z; i > 0; i--) console.log(i);
  z--
}
