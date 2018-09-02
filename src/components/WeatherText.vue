<template>
  <div class="hello">
    <h1>{{ text }}</h1>
    <h2>{{ weatherData && `(${weatherData.main.temp} °C)` }}</h2>
  </div>
</template>

<script>
import get from 'lodash.get';
import find from 'lodash.find';

import WEATHER_COMMENTS from './WeatherText.constants';

export default {
  name: 'WeatherText',
  props: {
    weatherData: Object,
  },
  computed: {
    text() {
      const temperature = get(this.weatherData, 'main.temp', null);

      if (!temperature) {
        return '';
      }

      const currentComment = find(WEATHER_COMMENTS, comment => comment.condition(temperature));
      return currentComment.text;
    },
  },
};
</script>

<style scoped lang="scss">
  h1, h2 {
    color: white;
    text-align: center;
  }

  h1 {
    margin-bottom: 0;
  }

  h2 {
    margin-top: 10px;
  }
</style>
