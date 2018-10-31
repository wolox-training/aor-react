import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square/index.js';

import style from './style.scss';

class Board extends Component {
  handleOnClickBoard = i => {
    this.props.onClick(i);
  };

  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={this.handleOnClickBoard} element={i} />;
  }

  render() {
    return (
      <React.Fragment>
        <div className={style.status}>{status}</div>
        <div className={style.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={style.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={style.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

Board.propTypes = {
  onClick: PropTypes.func,
  squares: PropTypes.number
};

export default Board;
