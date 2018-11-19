import { actions } from '@redux/setting/actions';

function reducerSetting(state = { playerOne: 'times', playerTwo: 'circle' }, action) {
  switch (action.type) {
  case actions.ICON:
    console.log('actions', action);
    if (action.isPlayerOne) {
      return { ...state, playerOne: action.icon };
    } else {
      return { ...state, playerTwo: action.icon };
    }
  default:
    return state;
  }
}

export default reducerSetting;
