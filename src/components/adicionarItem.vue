<template lang="html">
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Adicionar Item</h3>
      </div>

      <div class="card-body">
        <form v-on:submit.prevent="adicionarItem">
          <div class="form-group">
            <label>Nome:</label>
            <input type="text" class="form-control">
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Adicionar item">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components:{
    name: 'adicionarItem'
  }
}
</script>

<style lang="css">
</style>
