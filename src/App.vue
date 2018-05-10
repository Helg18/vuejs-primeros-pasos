<template>
  <div id="app">
    <img src="https://helg18.github.io/vuejs-primeros-pasos/assets/logo.png" height="64px">
    <h1>{{ titulo }}</h1>
    <h2>{{ listArtists }}</h2>
    <select name="country" id="country" v-model="selectedCountry">
      <option v-for="country in countries" :value="country.value">{{ country.name }}</option>
    </select><br>
     <div v-if="loading">
      <loader></loader> 
     </div>
     <div v-else>
      <artist v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid"></artist>         
     </div>
  </div>
</template>

<script>
import Loader from './components/Loader.vue'
import Artist from './components/Artist.vue'
import getArtists from './api/'

export default {
  name: 'app',
  data () {
    return {
      titulo: 'PlatziMusic by helg18',
      listArtists: 'Listado de artistas',
      artists: [],
      countries: [
        { name: "Argentina", value:"argentina"},
        { name: "Colombia", value:"colombia"},
        { name: "Spain", value:"spain"},
        { name: "Venezuela", value:"venezuela"}
      ],
      selectedCountry: "argentina",
      loading: false,
    }
  },
  components: {
    Artist,
    Loader
  },
  methods: {
    loadArtist() {
          this.loading = true
          const self = this
          getArtists(this.selectedCountry)
            .then(function(artists) {
              self.loading = false
        self.artists = artists
      })
    }
  },
  mounted: function () {
    this.loadArtist()
  },
  watch: {
    selectedCountry: function(){
      this.loadArtist()
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
 
</style>
