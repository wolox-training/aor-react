import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '@screens/Game/style.scss';

class Move extends Component {
  handleClick = () => {
    this.props.onClick(this.props.move);
  };
  render() {
    const { move } = this.props;
    const desc = `${move ? `Go to move #${move}` : 'Go to game start'}`;
    return (
      <li className={style.listMoveButton} key={move}>
        <button className={style.showMove} onClick={this.handleClick}>
          {desc}
        </button>
      </li>
    );
  }
}

Move.propTypes = {
  onClick: PropTypes.func,
  move: PropTypes.number
};

export default Move;
