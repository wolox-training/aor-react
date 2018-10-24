import React, { Component } from 'react';
import style from '../board/style.scss';
import Square from '@square';

   class Board extends Component {

    state = {
      squares : Array(9).fill(null),
    }

    renderSquare(i) {
      return <Square value={this.state.squares[i]}/>;
    }
    
    render() {
      const status = 'Next player: X';
      
      return (
        <div className={style.container}>
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
        </div>
        );
      }
    }

    export default Board;
