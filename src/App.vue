<template>
  <div id="app" v-bind:class="classObject">
    <WeatherText v-bind:weatherData="weatherData"/>
  </div>
</template>

<script>
import axios from 'axios';
import WeatherText from './components/WeatherText.vue';

export default {
  name: 'app',
  components: {
    WeatherText,
  },
  computed: {
    classObject() {
      return {
        'app-container': true,
        'bg-dark-blue': this.weatherData && this.weatherData.main.temp < 10,
        'bg-blue': this.weatherData && this.weatherData.main.temp >= 10 && this.weatherData.main.temp < 15,
        'bg-green': this.weatherData && this.weatherData.main.temp >= 15 && this.weatherData.main.temp < 20,
        'bg-orange': this.weatherData && this.weatherData.main.temp >= 20 && this.weatherData.main.temp < 25,
        'bg-red': this.weatherData && this.weatherData.main.temp >= 25,
      };
    },
  },
  data() {
    return {
      weatherData: null,
    };
  },
  mounted() {
    axios
      .get('http://api.openweathermap.org/data/2.5/weather?lat=52.4083&units=metric&lon=16.9335&APPID=fb1efa10aefc26ad6d799fe959c22028 ')
      .then(({ data }) => {
        this.weatherData = data;
      });
  },
};
</script>

<style lang="scss">
  $color-blue:         #383D8E;
  $color-dark-blue:    #281E5A;
  $color-red:          #E83123;
  $color-green:        #6FB624;
  $color-orange:       #FF824C;

  html, body {
    margin: 0;
    padding: 0;
  }

  .app-container {
    font-family: 'Quicksand', sans-serif;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @mixin backgroundColor($color) {
    background-color: $color;
  }

  .bg-blue {
    @include backgroundColor($color-blue);
  }

  .bg-dark-blue {
    @include backgroundColor($color-dark-blue);
  }

  .bg-red {
    @include backgroundColor($color-red);
  }

  .bg-green {
    @include backgroundColor($color-green);
  }

  .bg-orange {
    @include backgroundColor($color-orange);
  }
</style>
