<script setup>
import axios from "axios";
import { ref } from "vue";

const weatherData = ref(null);
const location = ref("");

const apiKey = import.meta.env.VITE_API_KEY;

const fetchWeatherData = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather`,
      {
        params: {
          q: location.value,
          appid: apiKey,
          units: "metric",
        },
      }
    );
    weatherData.value = response.data;
  } catch (error) {
    console.log(error.response);
  }
};
</script>

<template>
  <header>
    <div
      class="bg-sectionImage bg-no-repeat bg-cover bg-top bg-fixed h-screen flex justify-start p-20 flex-col items-center max-md:p-2 max-md:justify-center"
    >
      <h1 class="text-2xl font-bold p-4 tracking-wider">Weather App</h1>
      <input
        @keyup.enter="fetchWeatherData"
        v-model.trim="location"
        class="flex rounded-xl border-2 w-1/4 bg-white text-black h-12 p-3 max-lg:w-1/2"
        type="text"
        placeholder="Enter location..."
      />
      <div
        v-if="weatherData"
        class="m-5 p-10 flex flex-col items-center justify-between max-md:m-5 max-md:items-center"
      >
        <p class="text-7xl pb-5 max-md:text-5xl">
          {{ weatherData.main.temp.toFixed(0) }}°C
        </p>
        <p class="pb-5 text-5xl max-md:text-3xl">
          {{ weatherData.name }}
        </p>
        <p class="font-extralight text-4xl pb-2 max-md:text-2xl">
          {{ weatherData.weather[0].description }}
        </p>
        <p class="font-medium p-1 text-2xl">
          Pressure: {{ weatherData.main.pressure }} hPa
        </p>
        <p class="font-medium text-2xl p-1">
          Humidity: {{ weatherData.main.humidity }}
        </p>
      </div>
    </div>
  </header>
</template>

<style></style>
