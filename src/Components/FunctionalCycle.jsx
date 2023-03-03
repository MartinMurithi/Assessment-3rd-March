
import React, {useEffect, useState} from 'react'

function FunctionalCycle() {
    const [count, setCount] = useState(0);

    useEffect(()=> {
      setTimeout(() => {
          setCount(prev=> prev + 1);
      }, 1000);  
    })

  return (
      <div>
          <h3>useEffect to demo Functional life cycle, after every second a re-render happens and count increases</h3>
          <h3>{ count }</h3>
    </div>
  )
}

export default FunctionalCycle