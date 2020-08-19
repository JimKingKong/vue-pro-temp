import Types from './types.js'
import allService from '@/service/load_services.js'
import {
  PaginatonDefaultConfig
} from '@/config/index.js'
const { gridviewService } = allService
export default {
  // 1.启用命名空间
  namespaced: true,
  // 2.定义状态
  state: {
    data: {},
    list: {},
    detail: {}
  },
  // 3.修改状态
  mutations: {
    // 这里的 `state` 对象是模块的局部状态
    [Types.data](state, payload) {
      state.data = payload
    },
    [Types.list](state, payload) {
      state.list = payload
    },
    [Types.detail](state, payload) {
      state.detail = payload
    }
  },
  // 4.提交action，来修改状态
  actions: {
    async data(context, payload) {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }
      const result = await gridviewService.getData(payload, config)
      context.commit(Types.data, result.data)
      return Promise.resolve(result.data)
    },
    async list(context, payload) {
      const config = {
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      }
      const result = await gridviewService.getList(payload, config)
      context.commit(Types.list, result.data.data)
      return Promise.resolve(result.data.data)
    },
    async detail(context, payload) {
      const config = {
      }
      const result = await gridviewService.getDetail(payload, config)
      context.commit(Types.detail, result.data)
      return Promise.resolve(result.data)
    }
  },
  // 5.获取定义的状态, 通过store.getters获取里面的函数,例如：store.getters.count
  getters: {
    // state 是获取局部状态；rootState是获取根状态
    data(state, getters, rootState, rootGetters) {
      return state.data
    },
    list(state, getters, rootState, rootGetters) {
      const data = state.list
      if (data) {
        return data.content || []
      } else {
        return []
      }
    },
    listPaginatonConfig(state, getters, rootState, rootGetters) {
      const data = state.list
      if (data) {
        return {
          'current-page': data.pageNum + 1, // 当前第几页, 从 1 开始
          'page-sizes': [10, 20, 30, 40], // 可选择一页显示多少条
          'page-size': data.pageSize, // 一页显示多少条
          total: data.totalSize // 总共有多少条
        }
      } else {
        return { ...PaginatonDefaultConfig }
      }
    },
    detail(state, getters, rootState, rootGetters) {
      return state.detail
    }
  }
}
/**
 *
    // test global store
    // 1.获取store的数据
    this.$store.getters.depts)
    // 2.分发一个action
    this.$store.dispatch('depts') // 返回promise对象
    this.$store.getters.depts)

    // test gridview store
    // 1.获取store的数据
    this.$store.getters['gridview/data']
    // 2.分发一个action
    this.$store.dispatch('gridview/data') // 返回promise对象
    this.$store.getters['gridview/data']
    this.$store.getters['gridview/add'](100)
 */