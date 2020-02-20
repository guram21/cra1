import React, { useState } from 'react'

function Counter (props) {
  const [count, setCount] = useState(props.count)

  const countChangePlusHandler = () => {
    setCount(count + 1)
    props.plus()
  }

  const countChangeMinusHandler = () => {
    setCount(count - 1)
    props.minus()
  }

  return (
    <div>
      <button onClick={countChangeMinusHandler}>-</button>
      {count}
      <button onClick={countChangePlusHandler}>+</button>
    </div>
  )
}

export default Counter
