const {UserModel} = require('../models');

const UserService = {
    async saveUser(user) {
        try{
            if(user.name && user.email && user.password) {
                const userDb = new UserModel(user);
                return await userDb.save();
            }
            throw new Error("Empty field!");
        } catch(err) {
            console.log(err);
            throw new Error("Internal error!");
        }
    }
}

module.exports = UserService;