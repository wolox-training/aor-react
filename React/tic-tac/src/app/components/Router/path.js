import LoginForm from '@screens/Login';
import Game from '@screens/Game';

const way = [
  { path: '/', component: LoginForm, key: 1, exact: true },
  { path: '/game', component: Game, key: 2, exact: false }
];

export default way;
