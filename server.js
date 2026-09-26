import express from "express";
import logDebug from "./src/logger.js";
import httpLogger from "./src/httpLogger.js";
import configs from "./src/config.js";
import router from "./src/router.js";
import cookieParser from "cookie-parser";


const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(httpLogger);


app.use("/", router);


app.use((req, res) => {
    res.redirect("/login")
});

app.listen(configs.app_port, ()=>{
    logDebug(`server up and running on port ${configs.app_port}`).info() 
})