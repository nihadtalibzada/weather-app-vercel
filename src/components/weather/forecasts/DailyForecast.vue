<template>
  <v-col class="daily-forecast-card-container col-sm-12 col-lg-5">
    <v-text-field class="hidden hidden-xs-only"/>
    <v-card
        v-if="!getIsLoading"
        class="daily-forecast-card rounded-lg mx-auto"
        id="daily-forecast-card"
        elevation="4"
        :max-width="$vuetify.breakpoint.lgAndUp ? '500' : '100%'"
        max-height="650"
    >
      <v-card-title id="daily-forecast-card-title" class="text-sm-subtitle-2">
        {{ $t('labels.dailyForecast') }}
      </v-card-title>
      <v-card-text id="daily-forecast-card-text" class="daily-forecast-card-text">
        <v-row class="d-flex flex-column">
          <v-col
              v-for="(dailyForecast, index) in getDailyForecast"
              :key="index"
              :id="`daily-forecast-column-${index}`"
              class="daily-forecast-column d-flex flex-column"
          >
            <div class="daily-forecast-row d-flex flex-md-row justify-space-between align-center ml-5">
              <span :id="`daily-forecast-date-${index}`" class="daily-forecast-date text-left">
                {{ dailyForecast.date }}
              </span>
              <v-tooltip
                  :id="`daily-forecast-icon-tooltip-${index}`"
                  class="daily-forecast-icon-tooltip" bottom
              >
                <template v-slot:activator="{ on }">
                  <v-img
                      :src="require(`../../../assets/weatherConditionIcons/${dailyForecast.icon}.svg`)"
                      :id="`daily-forecast-icon-${index}`"
                      class="daily-forecast-icon"
                      max-width="78"
                      max-height="78"
                      v-on="on"
                  />
                </template>
                <span :id="`daily-forecast-description-${index}`" class="daily-forecast-description">
                  {{ capitalizeFirstLetter(dailyForecast.description) }}
                </span>
              </v-tooltip>
              <span :id="`daily-forecast-temperature-${index}`" class="daily-forecast-temperature text-right">
                {{ dailyForecast.averageTemperature }}
              </span>
            </div>
            <v-divider v-if="index !== getDailyForecast.length - 1"></v-divider>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-row id="daily-forecast-skeleton-loader-container" class="d-flex flex-column" v-else>
      <v-col
          v-for="index in $vuetify.breakpoint.mdAndUp ? $constVariables.skeletonLoaderAmounts.DAILY_FORECAST : 1"
          :key="index"
      >
        <v-skeleton-loader
            :id="`daily-forecast-skeleton-loader-${index}`"
            class="daily-forecast-skeleton-loader mx-auto my-0 py-0"
            type="article"
            :width="$vuetify.breakpoint.mdAndUp ? '80%' : '100%'"
            boilerplate
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import {mapGetters} from "vuex";
import HelperFunctions from "@/mixins/helperFunctions";

export default {
  name: "DailyForecast",

  computed: {
    ...mapGetters({
      getDailyForecast: "getDailyForecast",
      getIsLoading: "getIsLoading",
    }),
  },

  mixins: [
    HelperFunctions
  ]
}
</script>

<style scoped>
.daily-forecast-temperature, .daily-forecast-date, .daily-forecast-icon {
  flex: 1;
}
</style>