document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("cityInput");
  const searchButton = document.getElementById("searchButton");
  const weatherInfo = document.getElementById("weatherInfo");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("errorMessage");
  const API_KEY = "6523f09fb482bbdb656ca2ea53210d6b";

  searchButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (city === "") return;

    // it may throw error
    // server/database is always in another continent
    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showErrorMessage();
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found. Please try again.");
    }
    const data = await response.json();
    return data;
  }
  function displayWeatherData(data) {
    console.log(data);
    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
    const { name, main, weather } = data;
    cityName.textContent = name;
    temperature.textContent = `Temperature : ${main.temp}°C`;
    description.textContent = `Weather : ${weather[0].description}`;
  }
  function showErrorMessage() {
    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
