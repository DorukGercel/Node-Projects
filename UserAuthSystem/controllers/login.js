const {UserService} = require('../services');

const LoginController = {
    async getPage(req, res) {
        res.render("login", {title: "User Auth", err: false});
    },
    async postForm(req, res) {
        try {
            const user = {name: req.body.name, password: req.body.password};
            UserService.authenticateUser(user, (isMatch)=>{
                if(isMatch) {
                    return res.render("success");
                }
                return res.render("login", {title: "User Auth", err: true, message: "Auth Failed!"});
            });
        } catch(err) {
            console.log(1, err.message);
            res.render("error", {message: err.message});
        }
    }
}

module.exports = LoginController;