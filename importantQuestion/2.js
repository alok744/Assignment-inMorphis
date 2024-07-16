const books = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", alreadyRead: false },
    { title: "1984", author: "George Orwell", alreadyRead: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: false },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", alreadyRead: true }
];

for (const book of books) {
    const bookInfo = `${book.title} by ${book.author}`;
    if (book.alreadyRead) {
        console.log(`You already read "${bookInfo}"`);
    } else {
        console.log(`You still need to read "${bookInfo}"`);
    }
}
