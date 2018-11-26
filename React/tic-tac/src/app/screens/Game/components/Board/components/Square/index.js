import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './style.scss';

class Square extends Component {
  handleClick = () => {
    this.props.onClick(this.props.element);
  };

  render() {
    return (
      <button
        className={`${style.square} ${this.props.xplayer ? style.xPlayer : style.oPlayer}`}
        onClick={this.handleClick}
      >
        {this.props.value && <FontAwesomeIcon icon={this.props.value} />}
      </button>
    );
  }
}

Square.propTypes = {
  onClick: PropTypes.func,
  element: PropTypes.number,
  value: PropTypes.string,
  xplayer: PropTypes.bool
};

export default Square;
