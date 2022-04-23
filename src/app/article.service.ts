import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "./article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'https://rss-feed-back-end.herokuapp.com/api';
  //private baseUrl = 'http://localhost:5000/api';
  private rssUrl = this.baseUrl + '/news';
  private dbUrl = this.baseUrl + '/articles';

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${this.rssUrl}`);
  }
  getDBArticles(): Observable<Article[]>{
    return this.httpClient.get<Article[]>(`${this.dbUrl}`);
  }

  saveDbArticle(article: Article): Observable<any>{
    return (article.id === 0 || article.id === undefined)
    ? this.httpClient.post<Article>(`${this.dbUrl}`, article)
    : this.httpClient.put<Article>(`${this.dbUrl + '/' + article.id}`, article);
  }
  getArticleById(id: number): Observable<Article>{
    return this.httpClient.get<Article>(`${this.dbUrl + '/' + id}`);
  }
}
