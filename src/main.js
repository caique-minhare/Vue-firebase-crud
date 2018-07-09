import Vue from 'vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import App from './App.vue'
import NProgress from 'nprogress';


import adicionarItem from './components/adicionarItem.vue'
import editarItem from './components/editarItem.vue'
import listarItem from './components/listarItem.vue'
import Home from './components/Home.vue'

import '../node_modules/nprogress/nprogress.css'

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
        path: '/adicionar ',
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

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})


new Vue({
  render: h => h(App), router
}).$mount('#app')
