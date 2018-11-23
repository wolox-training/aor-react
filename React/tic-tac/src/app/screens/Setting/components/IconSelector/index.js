import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';

import Icon from './components/Icon';
import style from './style.scss';
import State from './icons';

library.add(fas);

class IconSelector extends Component {
  changeIcon = icon => {
    this.props.onSelect(icon);
  };

  renderIcons() {
    return State.map(icons => (
      <Icon
        name={icons.name}
        key={icons.id}
        className={`${style.icon} ${icons.name === this.props.selectedIcon ? style.selected : ''}`}
        onClick={this.changeIcon}
      />
    ));
  }

  render() {
    return (
      <Fragment>
        <div className={style.player}>
          <h2 className={style.title}>
            Player :{' '}
            <span className={style.iconTitle}>
              <FontAwesomeIcon icon={this.props.selectedIcon} />
            </span>
          </h2>
          <div className={style.icons}>{this.renderIcons()}</div>
        </div>
      </Fragment>
    );
  }
}
IconSelector.propTypes = {
  selectedIcon: PropTypes.string,
  onSelect: PropTypes.func
};

export default IconSelector;
