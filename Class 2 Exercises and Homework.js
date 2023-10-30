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
  ['-','o','-'],
  ['-','x','o'],
  ['x','-','x']
];
// 4. After the array is created, 'O' claims the top right square.
// Update that value.
const newLineTicTacToe = [['-','-','o']];
const slicedTicTacToe = ticTacToe.slice(-2);

// 5. Log the grid to the console.
newLineTicTacToe.concat(slicedTicTacToe);

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
function stringToDate(dateString) {
  
  const date = new Date(dateString);
   
  if (isNaN(date)) {
    return null; // Return null if the conversion failed
  }

  return date;
}
// Convert this string to a Date
const assignmentDate = '1/21/2019';
stringToDate(assignmentDate);


// 8. Create a new Date instance to represent the dueDate.  
// This will be exactly 7 days after the assignment date.


// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help


// Split the date string and extract the month, day, and year
// Example assignment date in the 'M/D/YYYY' format


// Manually extract the month, day, and year
const dateComponents = assignmentDate.split('/');
const month = parseInt(dateComponents[0], 10);
const day = parseInt(dateComponents[1], 10);
const year = parseInt(dateComponents[2], 10);

// Create the assignmentDate
const assignmentDate = new Date(year, month - 1, day); // Subtract 1 from month (0-based)

// Calculate the dueDate as 10 days after the assignment date
const dueDate = new Date(assignmentDate);
dueDate.setDate(assignmentDate.getDate() + 7);

// Define the months array
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Format the dueDate as an HTML time tag
const formattedDueDate = `<time datetime="${dueDate.toISOString().slice(0, 10)}">${months[dueDate.getMonth()]} ${dueDate.getDate()}, ${dueDate.getFullYear()}</time>`;

// 10. log this value using console.log
console.log("Formatted Due Date:", formattedDueDate);