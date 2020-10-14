import React,{useState} from 'react'
import Board from './Board'
import {calculateWinner} from '../helper'

const styles = {
  width: '200px',
  margin: '200px auto',
  fontSize: '20px',
  fontWeight: '100',
};

function Game() {
  let [history, setHistory] = useState([Array(9).fill(null)])
  let [stepNumber,setStepNumber] = useState(0)
  let [xIsNext,setXIsNext] = useState(true)
  let winner = calculateWinner(history[stepNumber])

  function handleClick(i) {
    console.log('following index clicked..',i)
    // get history length
    let length = history.length
    console.log('length of current history is',length)
    // create an new array from latest element in history
    let newArr=Array.from(history[stepNumber])
    console.log('new array created is',newArr)
    // check if there is already an winner or cell already occupied then dont do anything
    if( winner || history[stepNumber][i]) {
      return
    }
    // update new array that is created with X or O
    xIsNext?newArr[i]='X':newArr[i]='O'
    // push new array that is created in history
    setHistory([...history,newArr])
    console.log(`history is ${history} and length of history post updation is ${history.length}`)
    // update xIsNext
    setXIsNext(!xIsNext)
    // update step number
    setStepNumber(history.length)
  }
   const jumpTo = step => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };


   const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Got to move #${move}` : 'Go to start';
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (     
   <> 
   <Board squares = {history[stepNumber]} onClick = {handleClick}/>
     <div style = {styles}>
     {winner ? `Winner is ${winner}`  : 'Next Player is ' + (xIsNext ? 'X' : 'O')}
     {renderMoves()}
     </div>
   </>
  )
}

export default Game
