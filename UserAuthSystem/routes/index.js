module.exports = function(app) {
    app.use('/register', require('./register'));
    app.use('/login', require('./login'));
    app.use('/', require('./main'));
};