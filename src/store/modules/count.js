import {
    INCREMENT,
    DECREMENT
} from '../mutation-types'

const state = {
    count: 0
}

const actions = {
    ['increment'] ({commit}) {commit(INCREMENT)},
    ['decrement'] ({commit}) {commit(DECREMENT)}
}

const mutations = {
    [INCREMENT] (state) { state.count ++ },
    [DECREMENT] (state) { state.count --}
}

const getters = {
    ['getCount'] (state) { return state.count }
}

export default {
    actions,
    state,
    mutations,
    getters
}