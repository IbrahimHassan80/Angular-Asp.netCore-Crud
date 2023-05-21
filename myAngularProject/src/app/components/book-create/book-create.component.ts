import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit{

  book?: Book;

  ngOnInit(): void {  this.book = new Book();  }

  constructor(private bookservice: BookService) 
  {  }
  
//============ Validation Form ==========================//
  valid:boolean = true;

  registerform = new FormGroup({
    title: new FormControl('',Validators.required),
    author: new FormControl('',Validators.required),
    numberOfPages: new FormControl('',Validators.required)
  });
  
  get title(){
    return this.registerform.get('title')
  }
  get author(){
    return this.registerform.get('author')
  }
  get numberOfPages(){
    return this.registerform.get('numberOfPages')
  }
  // ====================================================//
  
  onSubmit(book : Book) { 
    if(this.registerform.invalid){
      this.valid = false;
      console.log('InValid Information');
     } else {
      this.load();
      this.bookservice.createBook(book)
      .subscribe( resp => 
        {
         this.book = {
          author : '',
          title : '',
        }});
     }
   }
   // Loading Button //
   loading: boolean = false;
    load() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 1500);
    }
    //  -------------- //
}