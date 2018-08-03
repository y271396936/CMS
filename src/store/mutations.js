import * as types from './mutation-types'

const mutations = {
  [types.SET_NAV_PATHNAME](state, data) {
    state.navPathname = data
  }
}

export default mutations
