import { INCREMENTB } from './mutationTypes'

const moduleB = {
    state: () => ({
        count: 0
    }),
    mutations: {
        [INCREMENTB](state) {
            state.count++
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    }
}

export default moduleB;