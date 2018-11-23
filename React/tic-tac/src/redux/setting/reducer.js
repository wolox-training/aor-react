import { actions } from '@redux/setting/actions';

function reducerSetting(state = { playerOne: 'times', playerTwo: 'circle' }, action) {
  switch (action.type) {
    case actions.CHANGE_ICON_PLAYER:
      if (action.isPlayerOne) {
        return { ...state, playerOne: action.icon };
      }
      return { ...state, playerTwo: action.icon };
    default:
      return state;
  }
}

export default reducerSetting;
