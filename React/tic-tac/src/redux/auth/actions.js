export function LogIn(payload) {
  console.log('este es el del login', payload);
  return {
    type: 'LogIn',
    payload
  };
}

export function LogOut(payload) {
  console.log('este es el de logout', payload);
  return {
    type: 'LogOut',
    payload
  };
}
