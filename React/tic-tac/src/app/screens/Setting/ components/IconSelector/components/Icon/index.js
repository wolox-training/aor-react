import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

class Icon extends Component {
  handleClick = () => {
    this.props.onClick(this.props.name);
  };
  render() {
    const { name } = this.props;
    return <FontAwesomeIcon className={this.props.className} icon={name} onClick={this.handleClick} />;
  }
}

Icon.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Icon;
