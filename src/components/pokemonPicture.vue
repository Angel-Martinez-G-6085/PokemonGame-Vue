<template>

<div class="pokemon-container">
  <img 
  :src="changePicture"
  alt="pokemon"
  class="hidden-pokemon">

  <img v-if="show_pokemon" 
  :src="changePicture"
  alt="pokemon"
  class="fade-in">
</div>

</template>

<script>
export default {
  props: {
    poke_id: {
      type: Number,
      required: true
    },
    show_pokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    changePicture() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.poke_id}.svg`
    }
  }
}
</script>

<style scoped>
.pokemon-container {
    height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  margin-left: -50vw;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>