var express = require('express');
var router = express.Router();

let books = [{
    id: 1,
    name: "Sherlock Holmes"
},{
    id: 2,
    name: "Sherlock Holmes 2"
}
];

const findBook = (id) => {
    for(let book of books) {
        if(book.id === id) {
            return book;
        }
    }
    return null;
}

/* GET all books. */
router.get('/', function(req, res, next) {
    res.render('books', {books:books});
});

/* GET certain book with id. */
router.get('/:bookId', function(req, res, next) {
    let book;
    if(book = findBook(Number(req.params.bookId))) {
        return res.render('books', {books:books});;
    }
    res.render('error', {message:"Book doesn't exist"});
});

/* POST certain book. */
router.post('/', function(req, res, next) {
    books.push(req.body);
    res.render('books', {books});;
});

/* PUT certain book with id. */
router.put('/', function(req, res, next) {
    let book;
    if(book = findBook(Number(req.body.id))) {
        book.name = req.body.name;
        return res.render('books', {books:books});;
    } 
    res.render('error', {message:"Book doesn't exist"});
});

/* DELETE certain book.*/
router.delete('/:bookId', function(req, res, next) {
    let book;
    books = books.filter(el=> {
                        console.log(el.id != Number(req.params.bookId));
                        return el.id != Number(req.params.bookId);
                    }
    );
    return res.render('books', {books:books});;
    
});

  
module.exports = router;
  