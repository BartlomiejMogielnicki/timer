import React from 'react'

const ChangeButton = (props) => {
  const action = props.action
  if (action === props.active) {
    return (
      <button disabled>{action}</button>
    )
  } else {
    return (
      <button
        onClick={() => props.click(action)}>
        {action}
      </button>
    )
  }
}

export default ChangeButton;