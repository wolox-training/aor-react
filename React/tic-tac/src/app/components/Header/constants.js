import Game from '@screens/Game';
import Setting from '@screens/Setting';

const routesHeader = [
  {
    path: '/game',
    key: 1,
    name: Game,
    exact: false,
    protected: true
  },
  {
    path: '/setting',
    name: Setting,
    exact: false,
    key: 1,
    protected: true
  }
];

export default routesHeader;
