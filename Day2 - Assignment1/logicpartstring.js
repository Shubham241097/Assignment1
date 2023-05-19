const bookNames = ['Learn Java', 'Basics of Python', 'Advanced java Concepts', 'Web Basics', 'Easy learning Python', 'Web Fundamentals', 'JAVA fundamentals'];

console.log("  ");
console.log("BookNames");

// 1. Find all books starting with 'Web'
const booksStartingWithWeb = bookNames.filter(book => book.startsWith('Web'));
console.log(booksStartingWithWeb);


// 2. Find all books which are related to Java
const booksRelatedToJava = bookNames.filter(book => book.includes('Java') || book.includes('java') || book.includes('JAVA'));
console.log(booksRelatedToJava);


// 3. Prepend 'Neo-' to every Book Name and Display new book name
const modifiedBookNames = bookNames.map(book => 'Neo-' + book);
console.log(modifiedBookNames);


// 4. Display sum of length of every book name
const sumOfLengths = bookNames.reduce((sum, book) => sum + book.length, 0);
console.log(sumOfLengths);
