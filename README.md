# Session-Based Authentication with Express.js and Redis

This repository contains a Node.js web application demonstrating how to implement robust session-based authentication using Express.js, with Redis acting as a highly performant session store and caching layer. 

## 🚀 Features

*   **Session Management:** Secure user sessions maintained via Express-Session.
*   **Redis Integration:** Leverages Redis for scalable session storage and caching (`connect-redis`).
*   **MVC Architecture:** Clean separation of concerns (Routes, Controllers, Services, Views).
*   **Server-Side Rendering:** Uses EJS (`login.ejs`, `login_error.ejs`) for dynamic frontend rendering.
*   **Structured Logging:** Built-in HTTP request logging and application-level logging.

## 📂 Project Structure

```text
├── .env                  # Environment variables (ignored in git)
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies and scripts
├── server.js             # Application entry point
├── src/
│   ├── cacheService.js   # Redis caching logic/wrappers
│   ├── config.js         # Centralized configuration management
│   ├── controller.js     # Route handlers and business logic
│   ├── httpLogger.js     # Middleware for logging HTTP requests
│   ├── logger.js         # General application logger
│   ├── redis.js          # Redis client initialization and connection
│   ├── router.js         # Express route definitions
│   ├── session.js        # Express session configuration
│   └── user.js           # User model/mock database logic
└── views/
    ├── login.ejs         # Login page template
    └── login_error.ejs   # Login error display template
```

## 🛠️ Prerequisites

Before running this application, ensure you have the following installed:
*   [Node.js](https://nodejs.org/) (v14.x or higher recommended)
*   [Redis](https://redis.io/) (Running locally or via a cloud provider)

## 💻 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd session-based-auth-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the following required configurations:
   ```env
   PORT=3000
   SESSION_SECRET=your_super_secret_session_key
   REDIS_HOST=127.0.0.1
   REDIS_PORT=6379
   # REDIS_PASSWORD=your_redis_password_if_any
   ```

4. **Start the Redis Server:**
   Make sure your Redis server is running. If running locally:
   ```bash
   redis-server
   ```

5. **Run the Application:**
   ```bash
   # For production
   npm start
   
   # For development (if using nodemon)
   npm run dev
   ```

6. **Access the App:**
   Open your browser and navigate to `http://localhost:3000`.

## 🔒 How Authentication Works

1. The user submits their credentials via the EJS login form.
2. The `controller.js` validates the credentials against the user records (`user.js`).
3. Upon successful validation, the user's data is serialized and stored in the Redis session store (`session.js` / `redis.js`).
4. A session cookie is sent to the client's browser.
5. Subsequent requests to protected routes authenticate the user by verifying the session cookie against the Redis store.