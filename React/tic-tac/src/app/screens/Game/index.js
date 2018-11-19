import React, { Component, Fragment } from 'react';
import calculateWinner from '@utils/gameUtils';
import Header from '@components/Header';
import { connect } from 'react-redux';
import Board from './components/Board';
import style from './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Game extends Component {
  state = {
    history: [{ squares: Array(9).fill({value:null, xplayer:true, key:null}) }],
    stepNumber: 0,
    xIsNext: true
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i].value) {
      return;
    }

    squares[i] = {
      value:this.state.xIsNext ? this.props.playerOne : this.props.playerTwo, 
      xplayer:this.state.xIsNext,
      key: this.state.xIsNext ? 'x':'o'
    };

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
    let label;
    if (winner) {
      status = winner == 'x' ? this.props.playerOne : this.props.playerTwo;
      label = 'Winner';
    } else {
      status = this.state.xIsNext ? this.props.playerOne : this.props.playerTwo;
      label = 'Next Player';
    }

    return (
      <Fragment>
        <Header />
        <div className={style.game}>
          <div className={`${style.view} ${style.viewFeatured}`}>
            <Board squares={current.squares} onClick={this.handleClick} />
          </div>
          <div className={style.view}>
            <div className={style.title}>
              {label}:<div className={winner == 'x' || this.state.xIsNext? style.xPlayer : style.oPlayer}> <FontAwesomeIcon icon={status} /></div>
            </div>
            <ol className={style.listMove}>{moves}</ol>
          </div>
        </div>
      </Fragment>
    );
  }
}

const MapStateToProps = state => ({
  playerOne: state.setting.playerOne,
  playerTwo: state.setting.playerTwo
});

export default connect(MapStateToProps)(Game);
