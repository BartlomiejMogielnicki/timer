import React from 'react'

const ChangeButton = (props) => {
  const action = props.action
  return (
    <button
      onClick={() => props.click(action)}>
      {props.action}
    </button>
  )
}

export default ChangeButton;