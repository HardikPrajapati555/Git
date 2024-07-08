import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  // Add book
  addBookService(book: Book): string {
    book.id = uuidv4();
    this.books.push(book);
    return 'Book has been successfully added';
  }

  // Update book
  updateBookService(book: Book): string {
    const index = this.books.findIndex((currentBook) => currentBook.id === book.id);
    if (index === -1) {
      return 'Book not found';
    }
    this.books[index] = book;
    return 'Book has been successfully updated';
  }

  // Delete book
  deleteBookService(bookId: string): string {
    const index = this.books.findIndex((book) => book.id === bookId);
    if (index === -1) {
      return 'Book not found';
    }
    this.books.splice(index, 1);
    return 'Book has been deleted';
  }

  // Find all books
  findAllBooks(): Book[] {
    return this.books;
  }
}
