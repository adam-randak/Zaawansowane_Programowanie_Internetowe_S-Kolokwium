import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Author } from './model/Author';
import { Event } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private httpClient: HttpClient) { }


  public getAuthors(): Observable<Array<Author>> {
    return this.httpClient.get<Array<Author>>(`https://localhost:5001/Authors`);
  }

  public getAuhtor(id: number): Observable<Author> {
    return this.httpClient.get<Author>(`https://localhost:5001/Authors/${id}`)
  }

  public postAuthor(author: Author): Observable<Author> {
    return this.httpClient.post<Author>(`https://localhost:5001/Authors`, author)
  }

  public putAuthor(id: number, author: Author): Observable<Author> {
    return this.httpClient.put<Author>(`https//localhost:5001/People/${id}`, author)
  }

}
