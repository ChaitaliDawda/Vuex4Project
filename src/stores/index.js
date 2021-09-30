import { createStore } from 'vuex'
import { INCREMENT } from './mutationTypes'
import moduleA from './moduleA'
import moduleB from './moduleB'

export default createStore({
    modules: {
        moduleA,
        moduleB
    },
    state() {
        return {
            count: 0,
            todos: [
                { id: 1, text: 'text1', done: true },
                { id: 2, text: 'text2', done: false }
            ]
        }
    },
    mutations: {
        [INCREMENT](state, vlaue = 1) {
            state.count += vlaue;
        },
    },
    actions: {
        incrementAction({ commit }, value) {
            commit(INCREMENT, value)
        }
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        doneTodosCount(state, getters) {
            return getters.doneTodos.length
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    }
})