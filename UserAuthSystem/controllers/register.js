const {UserService} = require('../services');

const RegisterController = {
    async getPage(req, res) {
        res.render("register", {title: "User Auth"});
    },
    async postForm(req, res) {
        try {
            const user = {name: req.body.name, email: req.body.email, password: req.body.password};
            console.log(user);
            await UserService.saveUser(user);
            return res.redirect('/login');
        } catch(err) {
            console.log(1, err.message);
            res.render("error", {message: err.message});
        }
    }
}

module.exports = RegisterController;