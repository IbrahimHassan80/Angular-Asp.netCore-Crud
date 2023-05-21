import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { PrimeNGConfig } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: Book[] = [];
  bookToEdit?: Book;
  constructor (private bookservice: BookService, private primengConfig: PrimeNGConfig){ }

    ngOnInit() : void {
      this.getAllBooks();
      this.primengConfig.ripple = true;
    }

    // Pop UP //
    BasicShow: boolean = false;
    showDialog(book: Book) {
        this.BasicShow = true;
        this.bookToEdit = book;
    }
    closePopUp(){
      this.getAllBooks();
      this.BasicShow = false;
    }
    // Pop UP //

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
      this.BasicShow = false; // PopUp
    }

    deleteBook(book : Book) {
      this.bookservice.deleteBook(book)
      .subscribe((result) => (this.getAllBooks()));
     }
}