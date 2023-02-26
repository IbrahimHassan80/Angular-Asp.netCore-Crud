import { Injectable } from '@angular/core';
import { GetAuthor } from '../models/GetAuthor.model';
import { author } from '../models/author.model';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
    basUrl = "https://localhost:7259/api/Authors";
    constructor(private http: HttpClient) {  }

    getAllAuthor(): Observable<GetAuthor[]> {
        return this.http.get<GetAuthor[]>(this.basUrl);
    }

    creatAuthor(author: author): Observable<author> {
        return this.http.post<author>(this.basUrl, author);
    }

    deleteAuthor(id: number): Observable<author> {
        return this.http.delete<author>(this.basUrl + '/' + id);
    }

    updateAuthor(author: author): Observable<author> {
        return this.http.put<author>(this.basUrl, author);
    }
}