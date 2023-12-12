<template>
  <div id="air-conditions-card-container" class="air-conditions-card-container">
    <v-card
        v-if="!getIsLoading"
        id="air-conditions-card"
        class="air-conditions-card rounded-lg air-conditions mt-6"
        elevation="4"
    >
      <v-card-title
          id="air-conditions-card-title"
          class="air-conditions-card-title text-sm-subtitle-2"
      >
        {{ $t('labels.airConditions') }}
      </v-card-title>
      <v-card-text
          id="air-conditions-card-text-container"
          class="air-conditions-card-text-container"
      >
        <v-row class="pa-4">
          <v-col class="d-flex justify-start flex-column">
            <AirCondition
                id="air-conditions-real-feel"
                class="air-condition"
                icon-name="mdi-thermometer"
                :air-condition="{label: $t('airConditions.realFeel'), data: getCurrentWeather.feelsLike}"
            />
            <AirCondition
                id="air-conditions-humidity"
                class="air-condition"
                icon-name="mdi-water-percent"
                :air-condition="{label: $t('airConditions.humidity'), data: getCurrentWeather.humidity}"
            />
          </v-col>
          <v-col class="d-flex justify-start flex-column">
            <AirCondition
                id="air-conditions-real-wind"
                class="air-condition"
                icon-name="mdi-weather-windy"
                :air-condition="{label: $t('airConditions.wind'), data: getCurrentWeather.wind}"
            />
            <AirCondition
                id="air-conditions-real-pressure"
                class="air-condition"
                icon-name="mdi-gauge"
                :air-condition="{label: $t('airConditions.pressure'), data: getCurrentWeather.pressure}"
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-skeleton-loader
        v-else
        id="air-conditions-skeleton-loader"
        class="air-conditions-skeleton-loader mt-8"
        type="article, list-item"
        boilerplate
        width="100%"
    ></v-skeleton-loader>
  </div>
</template>

<script>
import AirCondition from "@/components/weather/airConditions/AirCondition.vue";
import {mapGetters} from "vuex";

export default {
  name: "AirConditionsOverview",

  components: {
    AirCondition
  },

  computed: {
    ...mapGetters({
      getCurrentWeather: "getCurrentWeather",
      getIsLoading: "getIsLoading"
    }),
  },
}
</script>

<style scoped>

</style>