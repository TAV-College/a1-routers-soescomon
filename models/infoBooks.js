const { db } = require("./db_base");

const getAllInfoBooks = async () => {
  const stmt = db.prepare("SELECT * FROM books");
  let infoBooks;
  try {
    infoBooks = await stmt.all();
  } catch (err) {
    console.error(err);
    return null;
  }
  return infoBooks ? infoBooks : null;
};

module.exports = {
  getAllInfoBooks,
};
