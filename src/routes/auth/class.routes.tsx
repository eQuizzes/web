import Class from '../../pages/Student/Class';
import ClassDetail from '../../pages/Student/Class/pages/Detail';

const ClassRoutes = [
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
