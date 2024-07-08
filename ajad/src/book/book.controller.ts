import { Controller, Get, Put, Delete, Post, Param, Body } from '@nestjs/common';
import { Book } from './data/book.dto'; // Adjust the path as needed
import { BookService } from './book.service'; // Adjust the path as needed

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/findAll')
  getBooks(): Book[] {
    return this.bookService.findAllBooks();
  }

  @Put('/update')
  updateBooks(@Body() book: Book): string {
    return this.bookService.updateBookService(book);
  }

  @Delete('/delete/:id')
  deleteBooks(@Param('id') bookId: string): string {
    return this.bookService.deleteBookService(bookId);
  }

  @Post('/add')
  addBooks(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
}
