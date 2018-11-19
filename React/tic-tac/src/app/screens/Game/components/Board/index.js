import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from './components/Square';
import style from './style.scss';

class Board extends Component {
  renderSquare(i) {
    return <Square xplayer={this.props.squares[i].xplayer} value={this.props.squares[i].value} onClick={this.props.onClick} element={i} />;
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
  squares: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    xplayer: PropTypes.bool
  }))
};

export default Board;
