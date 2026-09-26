import redisClient from "./redis.js";

export const setCache = async (key, value) => {
    return await redisClient.set(key, JSON.stringify(value));
};

export const getCache = async (key) => {
    const value = await redisClient.get(key);

    return value ? JSON.parse(value) : null;
};

export const delCache = async (key) => {
    return redisClient.del(key);
};