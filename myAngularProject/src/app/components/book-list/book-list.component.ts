import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];
  bookToEdit?: Book;
  @Output() bookupdated = new EventEmitter<Book[]>();
  constructor (private bookservice: BookService){ }

    ngOnInit() : void {
      this.getAllBooks();
    }

    getAllBooks(){
      this.bookservice.getAllBooks()
      .subscribe((result:Book[]) => (this.books = result));
    }
    

    editBook(book: Book) {
      this.bookToEdit = book;
    }

    updateBook(book : Book) { 
      this.bookservice.updateBook(book)
      .subscribe();                       // (books : Book[]) => this.bookupdated.emit(books)
    }

    deleteBook(book : Book) {
      this.bookservice.deleteBook(book)
      .subscribe((result) => (this.getAllBooks()));
     }
}