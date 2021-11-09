<template>
<h1 v-if="!pokemon">Espere porfavor...</h1>
<div v-else>
    <h1>¿Cual es este Pokemon</h1>
    <pokemon-picture :poke_id="pokemon.id" :show_pokemon="showPokemon"/>
    <pokemon-options 
    :opciones="pokeArray" 
    @selectPokemon="checkAnswer($event)"/>
    
    <template v-if="showAnswer">
      <h2 class="fade-in">{{showMessage}}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
</div>
</template>

<script>
import pokemonOptions from '@/components/pokemonOptions.vue'
import pokemonPicture from '@/components/pokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
  components: {
    pokemonOptions,
    pokemonPicture
  },
  data() {
    return {
      pokeArray: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      showMessage: ''
    }
  },
  methods: {
    async mixPokemonArray () {
      this.pokeArray = await getPokemonOptions()
      const rndInt = Math.floor(Math.random() * 4)
      this.pokemon = this.pokeArray[rndInt]
    },
    checkAnswer (selectedPokemon) {
      this.showPokemon = true
      this.showAnswer = true
      if(selectedPokemon===this.pokemon.id) {
        this.showMessage =  `Correcto, el pokemon es ${this.pokemon.name}`
      } else {
        this.showMessage =  `Opps, el pokemon era ${this.pokemon.name}`
      }
    },
    newGame() {
      this.pokeArray = [],
      this.pokemon = null,
      this.showPokemon = false,
      this.showAnswer = false,
      this.showMessage = '',
      this.mixPokemonArray()
    }
  },
  mounted() {
    this.mixPokemonArray()
  }
}
</script>

<style>

</style>