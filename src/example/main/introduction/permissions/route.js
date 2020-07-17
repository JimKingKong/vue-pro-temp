
// 普通加载路由
// import Permissions from './permissions.vue'
// 懒加载路由
const Permissions = () => import(/* webpackChunkName: "permissions" */ './permissions.vue')
export default {
  name: 'permissions',
  path: 'permissions', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Permissions,
  children: [
  ]
}
