const MainController = {
    async getMainPage(req, res) {
        res.render('main', { title: 'Project Management System' });
    }
}

module.exports = MainController;