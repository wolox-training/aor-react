import React, { Component } from 'react';
import style from '../game/style.scss';
import Board from '~board';

class Game extends Component {
    render() {
      return (
        <div className={style.game}>
        <div className={style.gameBoard}>
        <Board />
        </div>
        <div className={style.gameInfo}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
        </div>
        </div>
        );
      }
    }

    export default Game;
           
    