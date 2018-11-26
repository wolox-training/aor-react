import LoginForm from '@screens/Login';
import Game from '@screens/Game';
import NotFound from '@screens/NotFound/notFound';
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
    name: 'Game',
    exact: false,
    protected: true,
    showOnMenu: true
  },
  {
    path: '/setting',
    renderComponent: Setting,
    key: 4,
    name: 'Setting',
    exact: false,
    protected: true,
    showOnMenu: true
  },
  {
    path: '/404',
    renderComponent: NotFound,
    key: 3,
    protected: true
  }
];

export default routes;
