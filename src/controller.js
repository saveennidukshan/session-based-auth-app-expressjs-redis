import { getCache, setCache } from "./cacheService.js";
import checkUser from "./user.js"

export const getLogin = (req, res) => {
    console.log(req.session)
    if(req.session.sessionData.logged) return res.redirect("/dashboard");
    res.render("login");
}


export const postLogin = async (req, res) => {
    console.log(req.session)
    if(req.session.sessionData.logged) return res.redirect("/dashboard");
    const { email, password } = req.body;
    if(!checkUser(email,password)) return res.render("login_error");
    const cache = setCache(req.session.sessionId, {
        ...await getCache(req.session.sessionId),
        logged: true
    })
    if(!cache) return res.redirect("/login");
    res.redirect("/dashboard")
}

export const getDashboard = (req, res) => {
    console.log(req.session)
    if(!req.session.sessionData.logged) return res.redirect("/login");
    res.send("dashboard ")
}