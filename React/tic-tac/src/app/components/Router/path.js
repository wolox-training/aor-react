import LoginForm from '@screens/Login';
import Game from '@screens/Game';
import notFound from '@screens/NotFound/notFound';
import Setting from '@screens/Setting';

const routes = [
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
  },
  {
    path: '/setting',
    renderComponent: Setting,
    key: 4,
    exact: false,
    protected: true
  },
  {
    renderComponent: notFound,
    key: 3,
    protected: true
  }
];

export default routes;
