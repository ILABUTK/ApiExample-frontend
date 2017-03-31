// The Vue build version to load with the `import` command
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './MyApp';
Vue.use(VueRouter);

var routes = [{
  path: '/',
  component: resolve => require(['./my_components/task_list.vue'], resolve)
}, {
  path: '/createTask',
  component: resolve => require(['./my_components/create_task.vue'], resolve)
}
];

const router = new VueRouter({
    routes,
    linkActiveClass: "active"
});

new Vue({
    router,
    template: '<App/>',
    components: { App }
}).$mount('#app');
