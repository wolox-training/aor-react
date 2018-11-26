import { createTypes } from 'redux-recompose';

export const actions = createTypes(['ICON'], '@ICON');

const actionCreators = {
  setIcon: (payload, isPlayerOne) => ({
    type: actions.ICON,
    icon: payload,
    isPlayerOne,
    target: 'changeIcon'
  })
};

export default actionCreators;
