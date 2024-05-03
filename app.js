// Question 3: Why does the counter start at NaN?
// A: You need to start the count at 0;

let count = 0;
document.getElementById('counter-value').innerText = count;

const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

// Question 4: What happens to the counter value in the HTML when increment is clicked?
// A: It increases by 1 using the ++ increment operator
incrementButton.addEventListener('click', function() {
  
    count++;
    debugger
    document.getElementById('counter-value').innerText = count;
});

// Question 5: Why does the decrement button not work?
// A: the id in getElementById was misspelled count-value instead of counter-value
decrementButton.addEventListener('click', function() {
    count--;
    document.getElementById('counter-value').innerText = count;
});

// Question 6: Why does the reset function set the count to '0' as a string?
// A: because strings are surrounded by quotations
resetButton.addEventListener('click', function() {
    count = '0';
    document.getElementById('counter-value').innerText = count;
});

// Question 7: How can you monitor the value of count using breakpoints?
// A: Put a debugger after the count++, in inspect sources > scope > local it will show the value
// Question 8: What is the scope of the count variable in DevTools?
// A: Local
// Question 9: Use the Network tab to find out: Is the app.js file loaded successfully?
// A: It loads successfully but has a 404 error not finding the favicon
// Question 10: Use the Console to track errors. Are there any errors being thrown?
// A: 404 error finding favicon