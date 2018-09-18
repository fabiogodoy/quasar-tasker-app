<template>
      <q-page>
        <q-alert color="primary" v-if="tasks.length == 0" class="q-mt-sm">
            There is no tasks yet.
        </q-alert>
        <q-list highlight v-if="tasks.length > 0">
            <q-list-header>
                Your Tasks
                <q-btn icon="visibility_off" label="Hide Finished" class="q-ml-sm" v-if="tasks.length > 0 && showDone" @click="hide(true)"/>
                <q-btn icon="visibility" label="Show Finished" class="q-ml-sm" v-if="tasks.length > 0 && !showDone" @click="hide(false)"/>
            </q-list-header>
            <q-card v-for="t in tasks" v-if="!t.done || (t.done && showDone)">
            <q-card-title>
                <q-btn icon="pause" round v-if="t.working && !t.done" @click="play(t)"/>
                <q-btn icon="play_circle_filled" round v-if="!t.working && !t.done" @click="play(t)"/>
                <q-btn icon="done" round v-if="!t.done" @click="done(t)"/>
                #{{t.id}} - {{t.title}}
                <q-chip icon="done" color="positive" class="q-ml-sm" v-if="t.done">
                    Done!
                </q-chip>
            </q-card-title>
            <q-card-separator />
            <q-card-main>
                {{t.description}}
            </q-card-main>
            </q-card>
        </q-list>

        <q-page-sticky position="bottom-right" :offset="[18, 18]">
          <q-btn round color="primary"  icon="add_circle" @click="open()"/>
        </q-page-sticky>

    <task ref="taskModal"></task>
    
    </q-page>

</template>

<style>
</style>

<script>
import Task from './Task'
export default {
  name: 'PageIndex',
  components:{Task},
  data(){
      return {
          tasks: [],
          showDone: true
      }
  },
  beforeMount(){
      this.loadTasks();
  },
  methods:{
    open() {
      this.$refs.taskModal.opened = true

    },
    play(task){
      task.working = !task.working
      this.$store.commit("STORE_TASK", task)
      this.loadTasks();
    },
    done(task){
        task.done = true
        this.$store.commit("STORE_TASK", task)
        this.loadTasks();
    },
    loadTasks(){
        this.tasks = []
        this.tasks = this.$store.getters.tasks
    },
    hide(show){
        this.showDone = !show;
        this.loadTasks();
    }
  }
  
}
</script>
<style>

</style>

