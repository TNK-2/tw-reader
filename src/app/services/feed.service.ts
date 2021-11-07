import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { Feed } from '../models/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private feedUrl = "api/feeds"
  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"})
  };
  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Feed[]> {
    // return this.http.get<Feed[]>(this.feedUrl)
    //   .pipe(
    //     tap(feeds => console.log(feeds)),
    //     catchError(this.handleError<Feed[]>("list all feeds", []))
    //   )
    return of([])
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.error(`${operation} 失敗 : ${error.message}`);
      return of(result as T);
    };
  }
}
