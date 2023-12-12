<template>
  <v-row id="weather-info-container" class="weather-info-container">
    <v-col class="col-lg-1 hidden-xs-only"></v-col>
    <v-col id="weather-info" class="weather-info col-sm-12 col-lg-6 flex-fill">
      <SearchForecast id="search-forecast-component"/>
      <CurrentWeatherOverview id="current-weather-overview-component"/>
      <HourlyForecast id="hourly-forecast-component"/>
      <AirConditionsOverview/>
    </v-col>
    <DailyForecast id="daily-forecast-component"/>
  </v-row>
</template>

<script>
import {mapActions} from "vuex";
import DailyForecast from "@/components/weather/forecasts/DailyForecast.vue";
import HourlyForecast from "@/components/weather/forecasts/HourlyForecast.vue";
import CurrentWeatherOverview from "@/components/weather/forecasts/CurrentWeatherOverview.vue";
import SearchForecast from "@/components/weather/forecasts/SearchForecast.vue";
import AirConditionsOverview from "@/components/weather/airConditions/AirConditionsOverview.vue";

export default {
  name: "WeatherInfo",

  components: {
    AirConditionsOverview,
    SearchForecast,
    CurrentWeatherOverview,
    HourlyForecast,
    DailyForecast
  },

  created() {
    this.$store.commit('setLoading', true);
    this.fetchCurrentWeather();
    this.fetchWeatherForecast();
  },

  methods: {
    ...mapActions({
      fetchCurrentWeather: "fetchCurrentWeather",
      fetchWeatherForecast: "fetchWeatherForecast"
    })
  }
}
</script>

<style scoped lang="scss">

</style>