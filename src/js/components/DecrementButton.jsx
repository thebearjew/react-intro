import React from 'react'

const DecrementButton = (props) => {
  const { callback } = props
  return (
    <div>
      <button name='decrement' onClick={callback}>decrement</button>
    </div>
  )
}

export default DecrementButton
