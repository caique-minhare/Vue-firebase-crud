<template lang="html">
<div>
  <h1>Listar Itens</h1>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Indice</th>
        <th>Nome</th>
        <th colspan="2">Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,indice) in items" :key="item['.key']">
        <td>{{ indice }}</td>
        <td> {{item.nome }}</td>
        <td>
          <router-link :to="{ name: 'Editar', params: {id: item['.key']} }" class="btn btn-warning">Editar</router-link>
        </td>
        <td>
          <button @click="deletarItem(item['.key'])" class="btn btn-danger">Deletar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import {db} from '../config/db';

export default {
  components:{
    name: 'listarItem'
  },
  data(){
    return{
      items: []
    }
  },
  firebase: {
    items: db.ref('items')
  },
  methods:{
    deletarItem(key){
      this.$firebaseRefs.items.child(key).remove();
    }
  }
}
</script>

<style lang="css">
</style>
