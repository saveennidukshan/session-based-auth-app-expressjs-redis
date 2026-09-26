import crypto from "crypto";
import { getCache, setCache } from "./cacheService.js";

export default async (req, res, next) => {
    if(req.cookies.session && await getCache(req.cookies.session)) {
        req.session = {
            sessionId : req.cookies.session,
            sessionData : await getCache(req.cookies.session)
        }
        return next();
    }
    const sessionId = crypto.randomBytes(32).toString("hex");
    res.cookie("session", sessionId, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24
    });
    const cache = await setCache(sessionId, {
        ip: req.ip,
        userAgent: req.get('User-Agent')
    });

    if (!cache) return res.send("internal server error")
    req.session = {
        sessionId,
        sessionData : await getCache(sessionId)
    }
    next();
}