<template>
  <div class="hourly-forecast-card-container">
    <v-card
        v-if="!getIsLoading"
        id="hourly-forecast-card"
        class="hourly-forecast-card rounded-lg"
        elevation="4"
    >
      <v-card-title id="hourly-forecast-card-title" class="hourly-forecast-card-title text-sm-subtitle-2">
        {{ $t('labels.hourlyForecast') }}
      </v-card-title>
      <v-card-text id="hourly-forecast-card-text" class="hourly-forecast-card-text">
        <v-row class="flex-md-wrap flex-nowrap flex-column flex-md-row">
          <v-col
              v-for="(hourForecast, index) in getHourlyForecast"
              :key="index"
              :id="`hourly-forecast-column-${index}`"
              class="hourly-forecast-column d-md-flex col-sm-12 col-md-2 flex-sm-column flex-md-row justify-md-space-between"
          >
            <div class="d-flex flex-md-column justify-space-between align-center ml-5">
              <span :id="`hourly-forecast-time-${index}`" class="hourly-forecast-time">
                {{hourForecast.time}}
              </span>
              <v-tooltip
                  :id="`hourly-forecast-icon-tooltip-${index}`"
                  class="hourly-forecast-icon-tooltip" bottom
              >
                <template v-slot:activator="{ on }">
                  <v-img
                      :src="require(`../../../assets/weatherConditionIcons/${hourForecast.icon}.svg`)"
                      :id="`hourly-forecast-icon-${index}`"
                      class="hourly-forecast-icon"
                      max-width="50"
                      max-height="50"
                      v-on="on"
                  />
                </template>
                <span :id="`hourly-forecast-description-${index}`" class="hourly-forecast-description">
                  {{ capitalizeFirstLetter(hourForecast.description) }}
                </span>
              </v-tooltip>
              <span :id="`hourly-forecast-temperature-${index}`" class="hourly-forecast-temperature mt-2">
                {{ hourForecast.temperature }}
              </span>
            </div>
            <v-divider
                v-if="index !== getHourlyForecast.length - 1"
                :vertical="!$vuetify.breakpoint.smAndDown"
            >
            </v-divider>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-row id="hourly-forecast-skeleton-loader-container" class="d-flex flex-column flex-md-row" v-else>
      <v-col
          v-for="index in $vuetify.breakpoint.mdAndUp ? $constVariables.skeletonLoaderAmounts.HOURLY_FORECAST : 1"
          :key="index"
      >
        <v-skeleton-loader
            type="article"
            :id="`hourly-forecast-skeleton-loader-${index}`"
            class="hourly-forecast-skeleton-loader"
            width="100%"
            boilerplate
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import HelperFunctions from "@/mixins/helperFunctions";

export default {
  name: "HourlyForecast",

  computed: {
    ...mapGetters({
      getHourlyForecast: "getHourlyForecast",
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