import React from 'react'
import Square from './Square'

// this will make a grid..
const style = {
  borderRadius: '10px',
  width: '400px',
  height: '300px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

function Board({squares,onClick}) {
  console.log('squares received in Board component are ',squares)
  return (
    <div style = {style}>
      {squares.map((square,index) =>  <Square value ={square} onClick={() => onClick(index)} />)}
    </div>
  )
}

export default Board
