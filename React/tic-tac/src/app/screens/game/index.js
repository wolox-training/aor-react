import React, { Component } from 'react';
import calculateWinner from '@utils/gameUtils';

import style from './style.scss';
import Board from './components/Board';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  };

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  mapMove = (step, move) => {
    const desc = `${move ? `Go to move #${move}` : 'Go to game start'}`;
    return (
      <li key={move}>
        <button className={style.square} onClick={() => this.jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map(this.mapMove);

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next Player: ${this.state.xIsNext ? `X` : `O`}`;
    }

    return (
      <div className={style.game}>
        <div className={style.gameBoard}>
          <Board squares={current.squares} onClick={i => this.handleClick(i)} />
        </div>
        <div className={style.gameInfo}>
          <div className={style.title}>{status}</div>
          <ol className={style.listMove}>{moves}</ol>
        </div>
      </div>
    );
  }
}
export default Game;
