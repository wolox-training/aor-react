import LoginForm from '@screens/Login';
import Game from '@screens/Game';

const way = [
  {
    path: '/',
    renderComponent: LoginForm,
    key: 1,
    exact: true,
    protected: false
  },
  {
    path: '/game',
    renderComponent: Game,
    key: 2,
    exact: false,
    protected: true
  }
];

export default way;
