import Vue from "vue";
import {i18n} from "@/main"
export default {
    fetchWeather(city, forecastType) {
        const apiEndpoint = this.constructApiEndpoint(city, forecastType);
        return new Promise((resolve, reject) => {
            fetch(apiEndpoint)
                .then(response => {
                    if (!response.ok) {
                        if (response.status === 404) {
                            throw new Error(i18n.t('errorMessages.404'));
                        } else if (response.status === 401) {
                            throw new Error(i18n.t('errorMessages.401'));
                        } else if (response.status === 500) {
                            throw new Error(i18n.t('errorMessages.500'));
                        } else {
                            throw new Error(i18n.t('errorMessages.default'));
                        }
                    }
                    return response.json();
                })
                .then(data => resolve(data))
                .catch(error => reject(error));
        });
    },

    constructApiEndpoint(city, forecastType) {
        return `${Vue.prototype.$constVariables.weatherApiUrl}${forecastType}?q=${city}&exclude=minutely&lang=${i18n.locale.split('-')[0]}&units=metric&appid=${process.env.VUE_APP_OPENWEATHER_API_KEY}`;
    }
}