import { createTypes } from 'redux-recompose';

export const actions = createTypes(['ICON'], '@ICON');

const actionCreators = {
  setIcon: (icon, isPlayerOne) => ({
    type: actions.ICON,
    payload: { icon, isPlayerOne },
    target: 'changeIcon'
  })
};

export default actionCreators;
