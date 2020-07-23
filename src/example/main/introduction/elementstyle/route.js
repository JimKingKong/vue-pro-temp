
// 普通加载路由
// import Elementstyle from './elementstyle.vue'
// 懒加载路由
const Elementstyle = () => import(/* webpackChunkName: "elementstyle" */ './elementstyle.vue')
export default {
  name: 'elementstyle',
  path: 'elementstyle', // 非一级路由前面没有/
  pname: 'main', // 父亲路由的名称
  level: 2, // todo 级路由（number类型）
  component: Elementstyle,
  children: [
  ]
}