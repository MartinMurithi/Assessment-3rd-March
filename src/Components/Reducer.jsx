//Using the useReducer hook create an app that increments a certain value when the user hovers a text and decrements the count when the user clicks on the text, also have a way to reset the value back to 0 


import React, { useReducer } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'hover.type':
            return state.count + 1;
        case 'click.type':
            return state.count - 1;
        case 'reset.type':
            return 0;
        default:
            throw new Error()
    }
}

function Reducer() {

    const [state, dispatch] = useReducer(reducer, {count : 0});

    function handleIncreament() {
        dispatch({ type: 'increament' })
    }

  return (
      <div>
          <h4 onMouseOver={handleIncreament}>SOFTWARE ENGINEERING, { state.count } </h4>
        <button >+</button>
    </div>
  )
}

export default Reducer