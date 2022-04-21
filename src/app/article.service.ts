import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "./article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'https://rss-feed-back-end.herokuapp.com/api/news';

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${this.baseUrl}`);
  }
}
