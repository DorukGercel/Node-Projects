module.exports = function(app) {
    app.use('/register', require('./register'));
    app.use('/', require('./main'));
};