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
    },
    async authenticateUser(user, cb) {
        try{
            if(user.name && user.password) {
                const userDb = await UserModel.findOne({name:user.name});
                console.log(user.password);
                return userDb.comparePassword(user.password, (err, isMatch) => {
                    if(err) throw new Error("Internal error!");
                    return cb(isMatch);
                });
            }
            throw new Error("Empty field!");
        } catch(err) {
            console.log(err);
            throw new Error("Internal error!");
        }

    }
}

module.exports = UserService;