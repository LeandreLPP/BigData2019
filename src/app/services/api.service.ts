import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../model/user-profile';
import { Recommendations } from '../model/recommendations';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://51.75.25.209:8080/';

  constructor(private http: HttpClient) { }

  public getRecommendations(userProfile: UserProfile): Observable<Recommendations> {
    return this.http.post<Recommendations>(this.url + 'getRecommendations', userProfile);
  }

  public getBookInfos(asin: string): Observable<Book> {
    return this.http.get<Book>(this.url + 'getBookInfos/' + asin);
  }
}
