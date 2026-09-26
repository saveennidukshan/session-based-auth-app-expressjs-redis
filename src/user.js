import configs from "./config.js"

export default (email, password) => {
    return (email == configs.test_user && password == configs.test_pass)
}