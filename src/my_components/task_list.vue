<template>
  <div class="panel panel-widget">
      <div class="panel-heading stat">
          <h3>Tasks List</h3>
      </div>
      <div class="panel-body">
          <ul v-for="task in tasks" class="nav nav-stacked nav_border">
              <li><span>{{task.name}} <a href="#" class="pull-right" @click="deleteTask(task.id)">X</a></span></li>
          </ul>
      </div>
      <router-link to="/createTask">Create a new task</router-link>
  </div>
</template>
<script>
export default {
    name: "task-list",
    data(){
      return {
        tasks : []
      };
    },
    mounted: function() {
      window.axios.get('/tasks')
        .then(response => {
          console.log(response);
          this.tasks = response.data;
        })
        .catch(erro => {
          console.log(erro);
        });
    },
    methods: {
      deleteTask(id){
        window.axios.delete(`/tasks/${id}`)
          .then(response => {
            console.log(response);
            let index = this.tasks.findIndex( task => task.id === id);
            this.tasks.splice(index, 1);
          })
          .catch(erro => {
            console.log(erro);
          });
      }
    }
}
</script>
<style src="../vendors/ihover/src/ihover.min.css"></style>
