import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    task: {
      id: 0,
      title: '',
      description: '',
      done: false,
      working: false
    },
    tasks: [],
    taskId: 0
  },
  mutations: {
    STORE_TASK (state, task) {
        if (!task.id){
            task.id = ++state.taskId
            state.tasks.push(task)
        } else {
            var found = state.tasks.findIndex(function (t) { return t.id === task.id; });
            state.tasks.slice(found, 1, task)
        }
    },
    SELECT_TASK (state, task){
        state.task = task
    }
  },
  getters: {
    tasks: state => {
      return state.tasks
    },
    task: state => {
      return state.task
    }
  }
})

export default store
