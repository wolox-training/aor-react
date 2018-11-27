import { createReducer, completeReducer } from 'redux-recompose';
import { actions } from '@redux/setting/actions';

const defaultIcon = {
  playerOne: 'times',
  playerTwo: 'circle'
};

const reducera = {
  primaryActions: [actions.ICON],
  override: {
    [actions.ICON]: (state, action) => {
      if (action.payload.isPlayerOne) {
        return { ...state, playerOne: action.payload.icon };
      }
      return { ...state, playerTwo: action.payload.icon };
    }
  }
};

export default createReducer(defaultIcon, completeReducer(reducera));
