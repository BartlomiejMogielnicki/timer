import React from 'react';

const Clock = (props) => {
  const { hours, minutes, seconds } = props.time
  return (
    <div>{hours}:{minutes}:{seconds}</div>
  )
}

export default Clock;