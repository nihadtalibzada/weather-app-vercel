<template>
  <v-text-field
      id="search-weather-forecast-text-field"
      class="search-weather-forecast-text-field"
      :label="$t('labels.search')"
      v-model="cityInput"
      outlined
      :rules="requiredRule"
      :placeholder="$t('labels.searchPlaceholder')"
      append-icon="mdi-magnify"
      :disabled="getIsLoading"
      :loading="getIsLoading"
      @keydown.enter="searchWeatherForecast"
      @click:append="searchWeatherForecast"
  ></v-text-field>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SearchForecast",

  data() {
    return {
      cityInput: null,
      requiredRule: []
    }
  },

  computed: {
    ...mapGetters({
      getIsLoading: "getIsLoading"
    }),
  },

  methods: {
    ...mapActions({
      fetchCurrentWeather: "fetchCurrentWeather",
      fetchWeatherForecast: "fetchWeatherForecast"
    }),

    searchWeatherForecast() {
      if (!this.cityInput) {
        this.requiredRule = [
          value => !!value || this.$t('errorMessages.emptyInput')
        ];
        return;
      }
      this.requiredRule = [];
      this.$store.commit('setLoading', true);
      this.fetchCurrentWeather(this.cityInput)
          .then()
          .catch((error) => {
            this.requiredRule = [error.message]
          });

      this.fetchWeatherForecast(this.cityInput)
          .then()
          .catch((error) => this.requiredRule = [error.message]);
    }
  }
}
</script>

<style scoped>

</style>