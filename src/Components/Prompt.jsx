// Write a code that does the following: Using a prompt allows the user to enter numbers separated by commas and print out the sum of the numbers.

import { useState } from "react";

function Prompt() {
  let nums = prompt("Enter number separated values to find their sum ");
  let numArray = nums.split(", ");
  let total = numArray.reduce((results, number) => results + number)

  const [sum, setSum] = useState(0);
  setSum(total)
  return (
    <>
      
      <h3>{numArray}</h3>
      
      <h3>{ sum }</h3>
    
    </>
  );
}

export default Prompt;
