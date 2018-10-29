import React, { Component } from 'react';
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
  
export default Square;
