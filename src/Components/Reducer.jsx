//Using the useReducer hook create an app that increments a certain value when the user hovers a text and decrements the count when the user clicks on the text, also have a way to reset the value back to 0 


import React, { useReducer } from 'react'

function reducer(count, action) {
    switch (action.type) {
        case 'hover.type':
            return count + 1;
        case 'click.type':
            return count - 1;
        case 'reset.type':
            return 0;
        default:
            ''
    }
}

function Reducer() {

    const [count, dispatch] = useReducer(reducer, 0);

    function 

  return (
      <div>
          <h4>{ count}</h4>
          <button onClick={(() => dispatch({ type: hover }))}>-</button>
        <button onClick={(() => dispatch({ type: click }))}>+</button>
    </div>
  )
}

export default Reducer