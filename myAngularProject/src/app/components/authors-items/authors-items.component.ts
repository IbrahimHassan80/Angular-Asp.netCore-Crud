import { Component, OnInit } from '@angular/core';
import { author } from 'src/app/models/author.model';
import { GetAuthor } from 'src/app/models/GetAuthor.model';
import { AuthorService } from 'src/app/services/author.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-authors-items',
  templateUrl: './authors-items.component.html',
  styleUrls: ['./authors-items.component.css']
})
export class AuthorsItemsComponent implements OnInit {
  authors : GetAuthor[] = [];
  author : author = {
    name : '',
    category : '',
    age : '',
  }
  
  constructor (private service:AuthorService) {}

  ngOnInit(): void {
    this.getAllAuthor();
  }
  
  //============ Validation Form ==========================//
  valid:boolean = true;
  registerform = new FormGroup({
    name: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required)
  });
  
  get name(){
    return this.registerform.get('name')
  }
  get category(){
    return this.registerform.get('category')
  }
  get age(){
    return this.registerform.get('age')
  }
  // ====================================================//

  getAllAuthor(){
     this.service.getAllAuthor()
     .subscribe(
      response => {
        this.authors = response});
  }

  onSubmit(){
    // Validation  
    if(this.registerform.invalid){
      this.valid = false;
      console.log('InValid Information');
     }

      if (this.author.id == null)
      {
        this.service.creatAuthor(this.author)
        .subscribe(
          response => {
            this.getAllAuthor();
            this.author = {
              name : '',
              category : '',
              age : '',
            };
          }
        )
      } else {
        this.updateAuthor(this.author);
      }

    

  }

  updateAuthor(author: author){
    this.service.updateAuthor(author)
    .subscribe(
      response => {
        this.getAllAuthor();
        this.author = {
          name : '',
          category : '',
          age : '',
        };
      }
    );
  }

  populateForm(author: author){
    // this.author.id = author.id;
    this.author = author;
  }

  deleteAuthor(id: number){
    this.service.deleteAuthor(id)
    .subscribe(
      response => {
        this.getAllAuthor();
      }
    )
  }
}