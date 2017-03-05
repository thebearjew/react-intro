import React from 'react'

const IncrementButton = (props) => {
  const { callback } = props
  return (
    <div>
      <button name='increment' onClick={callback}>Increment</button>
    </div>
  )
}

export default IncrementButton
