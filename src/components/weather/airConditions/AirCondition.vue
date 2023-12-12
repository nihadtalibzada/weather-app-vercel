<template>
  <v-row id="air-condition-container"
         class="air-condition-container d-flex align-baseline"
  >
    <div
        id="air-condition-icon-container"
        class="air-condition-icon-container"
    >
      <v-icon
          :id="`air-condition-icon-${iconName}`"
          class="air-condition-icon"
          color="primary" medium
      >
        {{ iconName }}
      </v-icon>
    </div>
    <v-col
        id="air-condition-data-container"
        class="air-condition-data-container d-flex flex-column align-baseline"
    >
      <span
          :id="`air-condition-label-${airCondition.label}`"
          class="air-condition-label text-sm-body-1"
      >
        {{ airCondition.label }}
      </span>
      <span
          :id="`air-condition-data-${airCondition.data}`"
          class="air-condition-data font-weight-bold text-h6 text--primary"
      >
        {{ airCondition.data }}
      </span>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "AirCondition",

  props: {
    iconName: {
      type: String,
      default: 'mdi-alert'
    },

    airCondition: {
      type: Object,
      default() {
        return {
          label: 'N/A',
          data: 'N/A'
        }
      }
    },
  }
}
</script>

<style scoped>

</style>