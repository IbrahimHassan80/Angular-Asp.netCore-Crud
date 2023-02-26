import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = "https://localhost:7259/api/Books";
  constructor(private http: HttpClient) {  }

    public getAllBooks() : Observable<Book[]> {
      return this.http.get<Book[]>(this.url);
    }

    public createBook(book: Book) : Observable<Book[]> {
      return this.http.post<Book[]>(this.url, book);
    }

    public updateBook(book: Book) : Observable<Book[]> {
      return this.http.put<Book[]>(this.url, book);
    }


    public deleteBook(book: Book) : Observable<Book[]> {
      return this.http.delete<Book[]>(`${this.url}/${book.id}`);
    }
}