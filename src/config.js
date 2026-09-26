import dotenv from "dotenv";

dotenv.config();

const configs = {
    redis_url : process.env.REDIS_URL,
    app_port: process.env.APP_PORT || 3000,
    test_user: process.env.TEST_USER || "test@test.lk",
    test_pass: process.env.TEST_PASS || "test123",
    app_env: process.env.APP_ENV || "prod"
}

export default configs;