import { test, expect } from "vitest";
import WeatherDisplay from "../components/WeatherDisplay.vue";

test("Check if WeatherDisplay component exists", async () => {
  expect(WeatherDisplay).toBeTruthy();
});
