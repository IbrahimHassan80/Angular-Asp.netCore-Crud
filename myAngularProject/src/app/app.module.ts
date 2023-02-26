import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BookListComponent } from './components/book-list/book-list.component';

import { BookCreateComponent } from './components/book-create/book-create.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AuthorsItemsComponent } from './components/authors-items/authors-items.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookCreateComponent,
    HomeComponent,
    NotFoundPageComponent,
    AuthorsItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
