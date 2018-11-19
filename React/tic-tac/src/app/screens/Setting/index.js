import React, { Component, Fragment } from 'react';
import Header from '@components/Header';
import actions from '@redux/setting/actions';
import IconSelector from './ components/IconSelector';
import { connect } from 'react-redux';

class Setting extends Component {
  handleSelect(icon, isPlayerOne) {
    console.log('icono ---->: ', icon);
    this.props.setIcon(icon, isPlayerOne);
  }

  render() {
    return (
      <Fragment>
        <Header />
        <IconSelector
          selectedIcon={this.props.playerOne}
          onSelect={icon => this.handleSelect(icon, true)}
        />
        <IconSelector
          selectedIcon={this.props.playerTwo}
          onSelect={icon => this.handleSelect(icon, false)}
        />
      </Fragment>
    );
  }
}

const MapStateToProps = state => ({
  playerOne: state.setting.playerOne,
  playerTwo: state.setting.playerTwo
});

const MapDispatchToProps = dispatch => ({
  setIcon: (icon, isPlayerOne) => dispatch(actions.setIcon(icon, isPlayerOne))
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(Setting);
