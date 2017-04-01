<template>
  <div>
    <h3>Tasks List</h3>
    <ul class="list-group">
        <li v-for="task in tasks" class="list-group-item"><span>{{task.name}} <a href="#" class="pull-right" @click="deleteTask(task.id)">X</a></span></li>
    </ul>
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
