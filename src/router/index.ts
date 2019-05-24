import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';
import { routerItem } from '@/interface';

const getComponent = require(`./import_${process.env.NODE_ENV}`);

export const constantRouterMap: routerItem[] & RouterOptions['routes'] = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/login',
    name: 'login',
    component: getComponent('login/index'),
  },
  {
    path: '/modiflyPwd',
    name: 'modiflyPwd',
    component: getComponent('updatePwd/index.vue'),
  },
  {
    path: '/updateSelf',
    name: 'personCenter',
    component: getComponent('updateSelf/index.vue'),
  },
  {
    path: '*',
    name: '404',
    component: getComponent('error/404.vue'),
  },
  {
    path: '/401',
    name: '401',
    component: getComponent('error/401.vue'),
  },
];
/**
 * permission 有3种类型： Boolean Array String
 * Boolean值的情况，为true，有权限，为false，没有权限
 * Array值的情况，只要其中一个有，就有权限，
 * String值，会匹配vuex里面的perssions数组，如果有，就有权限
 * meta.key 这个是用来匹配缓存的，请确保key值和对应页面的class名称一致，否则页面无法正常缓存
 */
export const asyncRouterMap: routerItem[] = [
  {
    path: '/dashboard',
    icon: 'dashboard',
    name: 'Dashboard',
    component: getComponent('dashboard/index'),
    permission: true,
    meta: { key: 'Dashboard' },
  },
  // insert more route below
  // member
  {
    path: '/member',
    icon: 'team',
    name: 'Member',
    component: getComponent('Member/index'),
    permission: true,
    meta: { key: 'member' },
    children: [
      {
        path: 'member-form',
        name: 'MemberForm',
        component: getComponent('Member/components/MemberForm'),
        permission: true,
        meta: { key: 'MemberForm' },
      },
      {
        path: 'member-table',
        name: 'MemberTable',
        component: getComponent('Member/components/MemberTable'),
        permission: true,
        meta: { key: 'MemberTable' },
      },
      {
        path: 'member-list',
        name: 'MemberList',
        component: getComponent('Member/components/MemberList'),
        permission: true,
        meta: { key: 'MemberList' },
      },
    ],
  },
  {
    path: '/customers',
    icon: 'team',
    name: 'Customers',
    component: getComponent('customers/index'),
    permission: true,
    meta: { key: 'Customers' },
    children: [
      {
        path: 'baseInfo',
        name: 'Base Info',
        component: getComponent('customers/baseInfo/index'),
        permission: true,
        meta: { key: 'BaseInfo' },
      },
    ],
  },
  {
    path: '/charts',
    icon: 'line-chart',
    name: 'Charts',
    component: getComponent('chart/index'),
    permission: true,
    meta: { key: 'Charts' },
    children: [
      {
        path: 'apexCharts',
        name: 'ApexCharts',
        component: getComponent('chart/apexCharts/index'),
        permission: true,
        meta: { key: 'ApexCharts' },
        children: [
          {
            path: 'line',
            name: 'Line',
            component: getComponent('chart/apexCharts/line/index'),
            permission: true,
            meta: { key: 'Line' },
          },
          {
            path: 'area',
            name: 'Area',
            component: getComponent('chart/apexCharts/area/index'),
            permission: true,
            meta: { key: 'Area' },
          },
          {
            path: 'column',
            name: 'Column',
            component: getComponent('chart/apexCharts/column/index'),
            permission: true,
            meta: { key: 'Column' },
          },
          {
            path: 'bar',
            name: 'Bar',
            component: getComponent('chart/apexCharts/bar/index'),
            permission: true,
            meta: { key: 'Bar' },
          },
          {
            path: 'mixed',
            name: 'Mixed',
            component: getComponent('chart/apexCharts/mixed/index'),
            permission: true,
            meta: { key: 'Mixed' },
          },
        ],
      },
    ],
  },
  {
    path: '/profile',
    icon: 'appstore-o',
    name: 'Profile',
    component: getComponent('components/index'),
    permission: true,
    meta: { key: 'Profile' },
    children: [
      {
        path: 'form',
        name: 'ProfileForm',
        component: getComponent('components/form/index'),
        permission: true,
        meta: { key: 'Form' },
        children: [
          {
            path: 'baseForm',
            name: 'ProfileBaseForm',
            component: getComponent('components/form/baseForm/index'),
            permission: true,
            meta: { key: 'BaseForm' },
          },
        ],
      },
    ],
  },
  {
    path: '/map',
    icon: 'environment',
    name: 'Map',
    component: getComponent('map/index'),
    permission: true,
    meta: { key: 'Map' },
    children: [
      {
        path: 'trajectory',
        name: 'Trajectory',
        component: getComponent('map/trajectory/index'),
        permission: true,
        meta: { key: 'Trajectory' },
      },
    ],
  },
];

Vue.use(Router);

export default new Router({
  routes: constantRouterMap,
});
