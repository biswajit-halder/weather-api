const dotenv = require('dotenv');
const redis = require('redis');

dotenv.config();

const redisClient = redis.createClient({
    url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`,
});

redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
});

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('Connected to Redis');
    } catch (error) {
        console.error('Error connecting to Redis:', error);
        process.exit(1); // Exit the process if Redis connection fails
    }
};

const disconnectRedis = async () => {
    try {
        await redisClient.quit();
        console.log('Disconnected from Redis');
    } catch (error) {
        console.error('Error disconnecting from Redis:', error);
    }
};

const getCachedData = async (key) => {
    try {
        const data = await redisClient.get(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error getting cached data:', error);
        throw error;
    }
};

const setCachedData = async (key, value, expiration = 3600) => {
    try {
        await redisClient.set(key, JSON.stringify(value), {
            EX: expiration,
        });
        console.log(`Data cached for key: ${key}`);
    } catch (error) {
        console.error('Error setting cached data:', error);
        throw error;
    }
};

module.exports = {
    redisClient,
    connectRedis,
    getCachedData,
    setCachedData,
    disconnectRedis
};