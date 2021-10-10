module.exports = function(app) {
    app.use('/projects', require('./project'));
    app.use('/', require('./main'));
};