import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import PropTypes from 'prop-types';

import style from './style.scss';

library.add(fas);

class IconSelector extends Component {
  // eslint-disable-next-line
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
  handleClick = (i, props) => {
    const oldIcon = i;
    const newIcon = this.setState(this.props.icon);
    // eslint-disable-next-line
    console.log(i, newIcon, oldIcon);
  };
  render() {
    const title = `Player: x`;

    return (
      <Fragment>
        <div className={style.player}>
          <h2 className={style.title}>{title}</h2>
          <div className={style.icons}>
            {this.state.icons.map(el => (
              <FontAwesomeIcon
                icon={el.name}
                className={style.icon}
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
  icon: PropTypes.string
};

export default IconSelector;
