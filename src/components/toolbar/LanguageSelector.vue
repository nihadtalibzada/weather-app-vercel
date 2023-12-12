<template>
  <v-menu
    bottom
    left
    offset-y
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        id="language-toggle"
        class="language-toggle"
        dark
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
              color="primary"
            >
              mdi-web
            </v-icon>
          </template>
          <span>{{ $t('languageSelector.tooltip') }}</span>
        </v-tooltip>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(language, index) in languageItems"
        :key="index"
        link
        @click="changeLanguage(language)"
      >
        <v-list-item-title>
          {{ language.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "LanguageSelector",

  data: () => ({
    languageItems: [
      {
        title: 'English',
        langCode: 'en-US'
      },
      {
        title: 'Dansk',
        langCode: 'da-DK'
      },
    ]
  }),

  computed: {
    ...mapGetters({
      getCurrentWeather: "getCurrentWeather",
    }),
  },

  methods: {
    ...mapActions({
      fetchCurrentWeather: "fetchCurrentWeather",
      fetchWeatherForecast: "fetchWeatherForecast"
    }),

    changeLanguage(language) {
      this.$i18n.locale = language.langCode;
      const city = this.getCurrentWeather?.city;
      this.fetchCurrentWeather(city);
      this.fetchWeatherForecast(city);
    }
  }
}
</script>

<style scoped>

</style>