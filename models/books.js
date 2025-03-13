const { db } = require('./db_base');

const getAllBooks = async () => {
    const stmnt = db.prepare("SELECT * FROM books;");
    try {
        return await stmnt.all();
    } catch (e) {
        console.log(e);
        return false;
    }
};

const getBookById = async (id) => {
    const stmnt = db.prepare("SELECT * FROM books WHERE id=?;");
    try {
        return await stmnt.get(id);
    } catch (e) {
        console.log(e);
        return false;
    }
};

const addBook = async ({author, title, isbn}) => {
    const stmnt = db.prepare("INSERT INTO books (author, title, isbn) VALUES (@author, @title, @isbn);");
    try {
        return await stmnt.run({author, title, isbn});
    } catch (e) {
        console.log(e);
        return false;
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook
}