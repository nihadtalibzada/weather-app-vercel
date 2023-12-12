<template>
  <v-row
      class="weather-overview-container"
      v-if="!getIsLoading"
  >
    <v-col
        id="weather-overview"
        class="weather-overview d-flex flex-column align-baseline"
    >
      <span
          id="weather-overview-city"
          class="weather-overview-city font-weight-bold text-md-h4 text--primary"
      >
        {{ getCurrentWeather.city }}
      </span>
      <span
          id="weather-overview-description"
          class="weather-overview-description text-subtitle-1 text--primary"
      >
        {{ capitalizeFirstLetter(getCurrentWeather.description) }}
      </span>
      <span
          id="weather-overview-temperature"
          class="weather-overview-temperature font-weight-bold text-md-h2 text--primary mt-4"
      >
        {{ getCurrentWeather.temperature }}
      </span>
    </v-col>
    <v-col
        id="weather-overview-image-container"
        class="weather-overview-image-container d-flex justify-end align-end"
    >
      <v-img
          id="weather-overview-image"
          class="weather-overview-image"
          :src="require(`../../../assets/weatherConditionIcons/${getCurrentWeather.icon}.svg`)"
          max-width="200"
          max-height="200"
      />
    </v-col>
  </v-row>
  <v-row
      id="weather-overview-skeleton-loader-container"
      class="weather-overview-skeleton-loader-container d-flex flex-row"
      v-else
  >
    <v-col>
      <v-skeleton-loader
          id="weather-overview-skeleton-loader-article"
          type="article"
          width="100%"
          height="200"
          boilerplate
      ></v-skeleton-loader>
    </v-col>
    <v-col class="d-flex justify-end">
      <v-skeleton-loader
          id="weather-overview-skeleton-loader-image"
          type="image"
          width="150"
          class="rounded-circle"
          height="150"
          boilerplate
      ></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from "vuex";
import HelperFunctions from "@/mixins/helperFunctions";

export default {
  name: "CurrentWeatherOverview",

  computed: {
    ...mapGetters({
      getCurrentWeather: "getCurrentWeather",
      getIsLoading: "getIsLoading",
    }),
  },

  mixins: [
    HelperFunctions
  ]
}
</script>

<style scoped>

</style>