const MainController = {
    async getPage(req, res) {
      res.render('index', { title: 'User Auth System' });
    }
}

module.exports = MainController;