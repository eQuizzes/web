import Class from '../../pages/Student/Class';
import ClassDetail from '../../pages/Student/Class/pages/Detail';
import ClassNew from '../../pages/Student/Class/pages/New';

const ClassRoutes = [
  {
    path: '/class/new',
    component: ClassNew,
  },
  {
    path: '/class/:idClass',
    component: ClassDetail,
  },
  {
    path: '/class',
    component: Class,
  },
];

export default ClassRoutes;
