import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from '../square/style.scss';

class Square extends Component {
  handleClick = () => {
    this.props.onClick(this.props.element);
  };

  render() {
    return (
      <button className={style.square} onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}

Square.propTypes = {
  onClick: PropTypes.func,
  element: PropTypes.number,
  value: PropTypes.number
};

export default Square;
