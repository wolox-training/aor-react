import React, { Component, Fragment } from 'react';
import Header from '@components/Header';
import actions from '@redux/setting/actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import IconSelector from './ components/IconSelector';
import style from './style.scss';

class Setting extends Component {
  handleSelect(icon, isPlayerOne) {
    this.props.setIcon(icon, isPlayerOne);
  }

  selectPlayerOne = icon => {
    this.handleSelect(icon, true);
  };

  selectPlayerTwo = icon => {
    this.handleSelect(icon, false);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className={style.players}>
          <IconSelector selectedIcon={this.props.playerOne} onSelect={this.selectPlayerOne} />
          <IconSelector selectedIcon={this.props.playerTwo} onSelect={this.selectPlayerTwo} />
        </div>
      </Fragment>
    );
  }
}

Setting.propTypes = {
  setIcon: PropTypes.func,
  playerOne: PropTypes.string,
  playerTwo: PropTypes.string
};

const mapStateToProps = state => ({
  playerOne: state.setting.playerOne,
  playerTwo: state.setting.playerTwo
});

const mapDispatchToProps = dispatch => ({
  setIcon: (icon, isPlayerOne) => dispatch(actions.setIcon(icon, isPlayerOne))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
