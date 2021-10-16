const MainController = {
    async getPage(req, res) {
      res.render('main', { title: 'User Auth System' });
    }
}

module.exports = MainController;