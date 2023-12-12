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
</style>
