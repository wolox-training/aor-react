import React, { Component, Fragment } from 'react';
import calculateWinner from '@utils/gameUtils';
import Header from '@components/Header';

import Board from './components/Board';
import style from './style.scss';

class Game extends Component {
  // eslint-disable-next-line
  state = {
    history: [{ squares: Array(9).fill(null) }],
    stepNumber: 0,
    xIsNext: true
  };

  handleClick = i => {
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
  };

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }

  // eslint-disable-next-line
  mapMove = (step, move) => {
    const desc = `${move ? `Go to move #${move}` : 'Go to game start'}`;
    return (
      <li key={move}>
        <button className={style.showMove} onClick={() => this.jumpTo(move)}>
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
      <Fragment>
        <Header />
        <div className={style.game}>
          <div className={`${style.view} ${style.viewFeatured}`}>
            <Board squares={current.squares} onClick={this.handleClick} />
          </div>
          <div className={style.view}>
            <div className={style.title}>{status}</div>
            <ol className={style.listMove}>{moves}</ol>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Game;
