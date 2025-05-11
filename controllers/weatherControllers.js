const weatherModel = require('../model/weatherModel');

const getWeather = async (req, res) => {
  const city = req.params.city;

  if (!city) {
    return res.status(400).json({ error: 'City name is required' });
  }

  try {
    const result = await weatherModel.getWeather(city);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message ? error.message : 'Internal Server Error' });
  }
}

module.exports = {
  getWeather
};