// Write a code that does the following: Using a prompt allows the user to enter numbers separated by commas and print out the sum of the numbers.

function Prompt() {
  let nums = prompt("Enter number separated values to find their sum ");
  let numArray = nums.split(", ");
  let sum;
  return (
    <>
      
      <h3>{numArray}</h3>
      
      <h3>{numArray.reduce((results, number) => results + number) }</h3>
    
    </>
  );
}

export default Prompt;
