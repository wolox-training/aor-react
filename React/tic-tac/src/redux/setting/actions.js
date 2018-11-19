export const actions = { ICON: 'ICON' };

function setIcon(payload, isPlayerOne) {
  return {
    type: actions.ICON,
    icon: payload,
    isPlayerOne
  };
}
export default { setIcon };
