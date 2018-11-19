import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';

import style from './style.scss';

library.add(fas);

class IconSelector extends Component {
  state = {
    icon: '',
    icons: [
      { name: 'flushed', id: 1 },
      { name: 'grimace', id: 2 },
      { name: 'grin-hearts', id: 3 },
      { name: 'grin-tongue-wink', id: 4 }
    ]
  };

  // eslint-disable-next-line
  handleClick = icon => {
    this.props.onSelect(icon);
  };

  render() {
    const title = 'Player ';

    return (
      <Fragment>
        <div className={style.player}>
          <h2 className={style.title}>
            {title}: <span className={style.iconTitle}>
            <FontAwesomeIcon icon={this.props.selectedIcon} /></span>
          </h2>
          <div className={style.icons}>
            {this.state.icons.map(el => (
              <FontAwesomeIcon
                icon={el.name}
                className={`${style.icon} ${
                  el.name == this.props.selectedIcon ? style.selected : ''
                }`}
                key={el.id}
                onClick={() => this.handleClick(el.name)}
              />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}
IconSelector.propTypes = {
  icon: PropTypes.string,
  selectedIcon: PropTypes.string,
  onSelect: PropTypes.func
};

export default IconSelector;
