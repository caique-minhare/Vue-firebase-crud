import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import App from './App.vue'


import adicionarItem from './components/adicionarItem.vue'
import editarItem from './components/editarItem.vue'
import listarItem from './components/listarItem.vue'
import Home from './components/Home.vue'

Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VueRouter)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
        name: 'Adicionar',
        path: '/adicionar',
        component: adicionarItem
  },
  {
      name: 'Editar',
      path: '/editar/:id',
      component: editarItem
  },
  {
      name: 'Listar',
      path: '/index',
      component: listarItem
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });


new Vue({
  render: h => h(App)
}).$mount('#app')
