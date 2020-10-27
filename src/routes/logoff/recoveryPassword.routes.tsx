import RecoveryPassword from '../../pages/RecoveryPassword';
import RecoveryPasswordCode from '../../pages/RecoveryPassword/pages/Code';
import RecoveryPasswordNew from '../../pages/RecoveryPassword/pages/New';

const RecoveryPasswordRoutes = [
  {
    path: 'recoveryPasswordCode',
    component: RecoveryPasswordCode,
  },
  {
    path: 'recoveryPassword/new',
    component: RecoveryPasswordNew,
  },
  {
    path: 'recoveryPassword',
    component: RecoveryPassword,
  },
];

export default RecoveryPasswordRoutes;
