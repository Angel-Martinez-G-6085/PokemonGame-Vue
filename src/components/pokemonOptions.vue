<template>
<div class="options-container">
  <ul>
    <li v-for="(pokemon,index) in opciones" 
    :key="index"
    @click="$emit('selectPokemon',pokemon.id)">
      {{pokemon.name}}
    </li>
  </ul>
</div>
</template>

<script>

export default {
  props: {
    opciones: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
}
li:hover {
  color: whitesmoke;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
    display: flex;
    justify-content: center;
}
</style>