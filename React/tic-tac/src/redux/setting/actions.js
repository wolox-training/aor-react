export const actions = { CHANGE_ICON_PLAYER: 'CHANGE_ICON_PLAYER' };

function setIcon(payload, isPlayerOne) {
  return {
    type: actions.CHANGE_ICON_PLAYER,
    icon: payload,
    isPlayerOne
  };
}
export default { setIcon };
