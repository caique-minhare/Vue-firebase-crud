<template lang="html">
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Editando Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="atualizarItem">
          <div class="form-group">
            <label>Nome:</label>
            <input type="text" class="form-control" v-model="novoItem.nome"/>
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Atualizar Item">
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../config/db'

export default {
  components:{
    name: 'editarItem'
  },
  firebase:{
    items: db.ref('items'),
    itemsObj:{
      source: db.ref('items'),
      asObject: true
    }
  },
  data(){
    return{
      novoItem: {}
    }
  },
  created(){
    let item = this.itemsObj[this.$route.params.id]
    this.novoItem = {
      nome: item.nome
    }
  },
  methods: {
    atualizarItem(){
      this.$firebaseRefs.items.child(this.$route.params.id).set(this.novoItem);
      this.$route.push('/index');
    }
  }
}
</script>

<style lang="css">
</style>
