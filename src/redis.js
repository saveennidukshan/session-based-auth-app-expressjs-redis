import { createClient } from "redis";
import logDebug from "./logger.js";


const redisClient = createClient();

redisClient.on("error", (err) => {
  logDebug("Redis connection error").error();
});

await redisClient.connect();

logDebug("Redis connected success").info();

export default redisClient;