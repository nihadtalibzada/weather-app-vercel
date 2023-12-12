<template>
  <v-row
      id="toolbar-switch-theme-container"
      class="toolbar-switch-theme-container d-flex align-center"
  >
    <v-img
        id="weather-app-logo"
        class="weather-app-logo mx-2"
        :src="require('../../assets/weather-app-logo.png')"
        alt="app-logo"
        max-height="60"
        max-width="60"
        contain
    ></v-img>
    <v-toolbar-title id="toolbar-title" class="toolbar-title ml-2 hidden-xs-only">
      {{ $t('appName') }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-switch
        id="switch-theme-toggle"
        class="switch-theme-toggle mr-2"
        v-model="$vuetify.theme.dark"
        inset
        hide-details
        :label="$t('labels.switchTheme')"
    ></v-switch>
  </v-row>
</template>

<script>
export default {
  name: "SwitchTheme"
}
</script>

<style scoped>

</style>