# Weather API

A simple Node.js application that provides weather data for a given city. The application uses the Visual Crossing Weather API to fetch weather data and Redis for caching.

This project is designed to demonstrate how to build a RESTful API with Node.js, Express, and Redis.

Sample solution for the <a href="https://roadmap.sh/projects/weather-api-wrapper-service" target="_blank">weather-api</a> challenge from <a href="https://roadmap.sh" target="_blank">roadmap.sh</a>.

## Features

- Fetch weather data for a specific city.
- Caches weather data in Redis to improve performance and reduce API calls.
- Built with Express.js for routing and Axios for HTTP requests.

## Project Structure

```
.env
index.js
package.json
config/
    redisClient.js
controllers/
    weatherControllers.js
model/
    weatherModel.js
routes/
    weatherRoutes.js
```

### File Descriptions

- **index.js**: Entry point of the application.
- **config/redisClient.js**: Handles Redis connection and caching logic.
- **controllers/weatherControllers.js**: Contains the controller logic for handling weather-related requests.
- **model/weatherModel.js**: Handles fetching weather data from the API and caching it.
- **routes/weatherRoutes.js**: Defines the routes for the weather API.

## Prerequisites

- Node.js (v14 or higher)
- Redis server

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd weather-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   PORT=3000
   API_KEY=<your_visual_crossing_api_key>
   REDIS_HOST=localhost
   REDIS_PORT=6379
   ```

4. Start the Redis server:
   ```bash
   redis-server
   ```

## Usage

### Start the Application

- In development mode:
  ```bash
  npm run dev
  ```

- In production mode:
  ```bash
  npm start
  ```

### API Endpoint

- **GET /weather/:city**: Fetches weather data for the specified city.

#### Example Request
```bash
GET http://localhost:3000/weather/London
```

#### Example Response
```json
{
  "resolvedAddress": "London, England, United Kingdom",
  "currentConditions": {
    "temp": 15.3,
    "humidity": 78,
    "conditions": "Partly Cloudy"
  }
}
```

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **Axios**: HTTP client for making API requests.
- **Redis**: In-memory data structure store for caching.
- **dotenv**: Loads environment variables from `.env` file.

## License

This project is licensed under the ISC License.

## Acknowledgments

- [Visual Crossing Weather API](https://www.visualcrossing.com/)
- [Redis](https://redis.io/)
