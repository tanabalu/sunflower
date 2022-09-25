export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/deposit',
    name: 'deposit',
    icon: 'smile',
    component: './deposit',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    name: '个人中心',
    icon: 'smile',
    path: '/my',
    component: './My',
  },
  {
    name: '分析页',
    icon: 'smile',
    path: '/dashboardanalysis',
    component: './DashboardAnalysis',
  },
  {
    name: '工作台',
    icon: 'smile',
    path: '/workplace',
    component: './Workplace',
  },
  {
    name: '高级表单',
    icon: 'smile',
    path: '/formadvancedform',
    component: './FormAdvancedForm',
  },
  {
    component: './404',
  },
];
