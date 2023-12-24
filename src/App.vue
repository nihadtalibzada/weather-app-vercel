<template>
  <v-app>
    <v-app-bar
        id="weather-app-bar"
        class="weather-app-bar"
        app
        elevation="1"
    >
      <v-toolbar flat width="100%" class="px-4">
        <SwitchTheme/>
        <LanguageSelector/>
      </v-toolbar>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main class="pt-3">
      <v-container
        id="weather-app-main-container"
        class="weather-app-main-container"
        fluid
      >
        <WeatherInfo/>
      </v-container>
    </v-main>
    <v-row class="d-flex row pt-4 justify-space-between">
      <v-col>
        <p class="text--primary">Real time weather forecast through <a href="https://openweathermap.org/api" target="_blank" class="text-decoration-underline">OpenWeather API.</a></p>
      </v-col>
      <v-col>
        <p class="text--primary">Copyright &copy; {{ new Date().getFullYear() }} — <a href="https://www.talibzada.com/" target="_blank" class="text-decoration-underline">Nihad Talibzada</a></p>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

import LanguageSelector from "@/components/toolbar/LanguageSelector.vue";
import SwitchTheme from "@/components/toolbar/SwitchTheme.vue";
import WeatherInfo from "@/components/weather/WeatherInfo.vue";

export default {
  name: 'App',

  components: {
    WeatherInfo,
    SwitchTheme,
    LanguageSelector
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hidden {
  visibility: hidden;
}

.weather-app-bar .v-toolbar__content {
  padding: 0;
}

.v-skeleton-loader__image:first-child, .v-skeleton-loader__image:last-child {
  border-radius: unset !important;
}
</style>
