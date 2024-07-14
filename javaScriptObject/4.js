var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
];

function displayReadingStatus(books) {
    // books.forEach(book => {
    //     console.log(`Title: ${book.title}`);
    //     console.log(`Author: ${book.author}`);
    //     console.log(`Reading Status: ${book.readingStatus}`);
    // });
    for (let i = 0; i < books.length; i++) {
        console.log("Title: " + books[i].title);
        console.log("Author: " + books[i].author);
        console.log("Reading Status: " + books[i].readingStatus);
        console.log('---------------------');
    }
}

displayReadingStatus(library);
