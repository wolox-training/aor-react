import React, { Component } from 'react';
import style from '../game/style.scss';
import Board from '@board';
import calculateWinner from '../../../util.js';


class Game extends Component {

state = {
  history : [{squares: Array(9).fill(null)}],
  xIsNext : true,
}

handleClick(i) {
  const history = this.state.history;
  const current = history[history.length -1];
  const squares = current.squares.slice();

  if(calculateWinner(squares) || squares[i]) {
    return;
  }
  squares[i] = this.state.xIsNext ? 'X' : 'O';

  this.setState({
    history: history.concat([{ squares: squares }]),
    xIsNext: !this.state.xIsNext,
  });
}

    render() {

      const history = this.state.history;
      const current = history[history.length -1]
      const winner = calculateWinner(current.squares);

      let status;
      if (winner) {
        status = 'Winner:' + winner;
      } else{
        status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div className={style.game}>
        <div className={style.gameBoard}>
        <Board  squares={current.squares} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className={style.gameInfo}>
        <div className={style.titulo}>{status}</div>
        <ol>{/* TODO */}</ol>
        </div>
        </div>
        );
      }
    }

    export default Game;
           
    