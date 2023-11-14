// sophisticated_code.js - Complex and Creative JavaScript Code

// Object to store book data
let books = [
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    genres: ["Fiction", "Coming-of-Age"],
    rating: 4.2
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genres: ["Fiction", "Legal drama"],
    rating: 4.5
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    genres: ["Fiction", "Dystopian"],
    rating: 4.7
  },
  // ... Add more books here
];

// Class definition for a Book
class Book {
  constructor(title, author, year, genres, rating) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genres = genres;
    this.rating = rating;
  }

  getBookInfo() {
    return `${this.title} by ${this.author} (${this.year}) - ${this.genres.join(", ")}. Rating: ${this.rating}`;
  }
}

// Function to filter books by genre
function filterBooksByGenre(genre) {
  return books.filter(book => book.genres.includes(genre));
}

// Example usage:
console.log("--- All Books ---");
books.forEach(book => console.log(new Book(book.title, book.author, book.year, book.genres, book.rating).getBookInfo()));

console.log("--- Fiction Books ---");
const fictionBooks = filterBooksByGenre("Fiction");
fictionBooks.forEach(book => console.log(new Book(book.title, book.author, book.year, book.genres, book.rating).getBookInfo()));

// Another big section of code...

// Utility functions...

// Event handling...

// Async operations...

// DOM manipulation...

// ... and so on.

// This code is for demonstration purposes only.
// It includes a basic book data structure, a Book class,
// functions for filtering books by genre, and some example usage.
// In a real-world scenario, the code would be much more elaborate
// and complex, with additional functionality, error handling,
// server interactions, etc.