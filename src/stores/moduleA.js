import { INCREMENTA } from './mutationTypes'

const moduleA = {
    namespaced: true,
    state: () => ({
        count: 0
    }),
    mutations: {
        [INCREMENTA](state) {
            state.count = 1 + state.count
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    }
}

export default moduleA;