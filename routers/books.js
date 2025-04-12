const router = require("express").Router();
const { getAllBooks, getBookById, addBook } = require("../models/books.js");
const { getAllInfoBooks } = require("../models/infoBooks.js");

router.get("/books", async (req, res) => {
  const books = await getAllBooks();
  if (books) {
    res.render("books", { title: `${books.length}`, books });
  } else {
    res.redirect("/");
  }
});

router.get("/books/add", async (req, res) => {
  const infoBooks = await getAllInfoBooks();
  if (infoBooks) {
    res.render("add_book", { title: "New Book", infoBooks });
  } else {
    res.redirect("/books");
  }
});

router.get("/books/:id", async (req, res) => {
  const gid = req.params.id;
  const book = await getBookById(gid);
  if (book) {
    res.render("book", { title: book.name, book });
  } else {
    res.redirect("/games");
  }
});

router.post("/books", async (req, res) => {
  const author = req.body.author;
  const title = req.body.title;
  const isbn = req.body.isbn;
  const result = await addBook({ author, title, isbn });
  res.json({
    book: result,
    msg: `${title} was added to the library`,
  });
});

module.exports = router;
