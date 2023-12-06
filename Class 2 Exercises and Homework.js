// 1. Create an object representation of yourself
// Should include: 
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
 const vasileVisovan = {
       firstName: 'Vasile',
       lastName: 'Visovan',
       favouriteFood:'Sarmale-Cabbage rolls',
       bestFriend: { 
        firstNameFriend: 'Norby',
        lastNameFriend: 'Kramarik',
        favouriteFoodFriend: 'papanasi'
      }
       
 };


// 2. console.log best friend's firstName and your favorite food
console.log(vasileVisovan);
console.log('My best friend first name is', vasileVisovan.bestFriend.firstNameFriend);
//vasileVisovan['bestFriend']['firstNameFriend'];

console.log('My favourite food is ', vasileVisovan.favouriteFood);
// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [
  ['-','O','-'],
  ['-','X','-'],
  ['X','-','X']
];

// O claims the top right square (0-based indexing)
ticTacToe[0][2] = 'O';

// Log the updated grid to the console
for (let row = 0; row < 3; row++) {
  console.log(ticTacToe[row].join(' '));
}

// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
function isValidEmail(email) {
  // Regular expression for a basic email validation
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(email);
}
const email1 = 'vasi@yahoo.com';
const email2 = 'vasi@yahoo';
isValidEmail(email1);//true
isValidEmail(email2);//false

// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.

// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.

// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help

// Given assignmentDate string
const assignmentDateStr = '1/21/2019';

// Convert the assignmentDate string to a Date object
const assignmentDate = new Date(assignmentDateStr);

// Create a new Date instance for the dueDate (7 days after assignment date)
const dueDate = new Date(assignmentDate);
dueDate.setDate(dueDate.getDate() + 7);

// Months array to help with formatting
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Format the dueDate for HTML time tag
const formattedDueDate = `${dueDate.getFullYear()}-${(dueDate.getMonth() + 1).toString().padStart(2, '0')}-${dueDate.getDate().toString().padStart(2, '0')}`;
const monthName = months[dueDate.getMonth()];
const day = dueDate.getDate();
const year = dueDate.getFullYear();

// Create HTML time tag
const htmlTimeTag = `<time datetime="${formattedDueDate}">${monthName} ${day}, ${year}</time>`;

// Log the result to the console
console.log(htmlTimeTag);
