import { Router } from "express";
import { getDashboard, getLogin, postLogin } from "./controller.js";
import session from "./session.js";

const router = Router();

router.get("/login", session, getLogin);

router.post("/login", session, postLogin);

router.get("/dashboard", session, getDashboard);


export default router;