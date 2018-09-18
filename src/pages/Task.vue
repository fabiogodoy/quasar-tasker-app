<template>
  <q-modal v-model="opened" :content-css="{minWidth: '40vw', minHeight: '40vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title class="text-center">
            Managing Tasks
          </q-toolbar-title>
        </q-toolbar>

        <q-toolbar slot="header">
          
        </q-toolbar>

        <q-toolbar slot="footer">
          <q-toolbar-title>
            <q-btn  color="secondary"  icon="save" label="Save" @click="save()"/>
            <q-btn  color="standard" flat  icon="close" label="Close" @click="opened = false"/>
          </q-toolbar-title>
        </q-toolbar>

        <div class="layout-padding">
          <q-input  float-label="Title" v-model="task.title" />
          <q-input
            type="textarea"
            v-model="task.description"
            float-label="Description"
            :max-height="100"
            rows="7"/>
        </div>
      </q-modal-layout>
    </q-modal>
</template>

<script>
export default {
name: "task",
  data () {
    return {
      opened: false,
      task: {}
    }
  },
  methods:{
      save(){
          this.$store.commit("STORE_TASK", this.task)
          this.task = {}
          this.opened = false
      }
  }
}
</script>