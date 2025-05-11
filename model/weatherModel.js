const axios = require('axios');
const dotenv = require('dotenv');
const { connectRedis, getCachedData, setCachedData } = require('../config/redisClient');
dotenv.config();

(async () => {
    await connectRedis();
})();

const getWeather = async (city) => {
    try {
        const cachedData = await getCachedData(city);
        if (cachedData) {
            console.log('Cache hit');
            return cachedData;
        } else {
            console.log('Cache miss');

            const weatherData = await getWeatherDataFromAPI(city);
            await setCachedData(city, weatherData);
            return weatherData;
        }
    } catch (error) {
        console.error('Error getting weather data:', error);
        throw error;
    }
}

const getWeatherDataFromAPI = async (city) => {
    const api_key = process.env.API_KEY;
    const api_url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${api_key}&contentType=json`;

    try {
        console.log('Fetching data from API');
        const response = await axios.get(api_url);
        return response.data;
    } catch (error) {
        // console.error('Error fetching weather data:', error);
        throw error;
    }
}

module.exports = {
    getWeather
};