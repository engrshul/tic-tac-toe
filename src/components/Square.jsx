import React from 'react'

// this style will only make button look good..
// it wont convert them into a 3*3 grid..

const styles = {
  background: 'lightblue',
  border: '5px solid darkblue',
  fontSize: '50px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none',
  height : 150,
  width : 150
};


function Square({value,onClick}) {
  return (
    <div>
      <button style = {styles} onClick= {() => onClick()}>{value}</button>
    </div>
  )
}

export default Square
