import Main           from 'src/pages/Main'
import Login          from 'src/pages/Login'
import TeacherCabinet from 'src/pages/TeacherCabinet'


export default [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/teacher-cabinet/:id',
    name: 'teacher-cabinet',
    component: TeacherCabinet
  }
]
