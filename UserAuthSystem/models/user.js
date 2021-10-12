const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

const UserSchema = new Schema(
    {
        name : {type:String, required:true},
        email    : {type:String, required:true, match: [emailRegex, "Type a valid email"]},
        password : {type:String, required:true}
    }
);

UserSchema.pre("save", function(next) {
        const user = this;
        if (!user.isModified('password')) return next();
        
        bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
            if (err) return next(err);
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err);
                // override the cleartext password with the hashed one
                user.password = hash;
                next();
            });
        });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);