import React, { Component } from "react";
import style from "../square/style.scss";
import PropTypes from "prop-types";

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
  onClick: PropTypes.func.isRequired
};

export default Square;
