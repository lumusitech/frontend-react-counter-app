import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {

  const [count, setCount] = useState(value);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubtract = () => {
    setCount(count - 1);
  }

  const handleReset = () => {
    setCount(value);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubtract}>-1</button>
      <button aria-label="btn-reset" onClick={handleReset}>Reset</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}
CounterApp.defaultTypes = {
  value: 0
}

export default CounterApp