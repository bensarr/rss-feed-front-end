import {Component, Input, OnInit} from '@angular/core';
import { Article } from '../article';
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css', '../app.component.css'],
})
export class ListArticlesComponent implements OnInit {
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  filterTerm!: string;
  articles: any;

  constructor(
    private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    var dbArts: Article[];
    this.articleService!.getDBArticles()
      .subscribe(
        data => {
          dbArts = data;
        },
        error => console.log(error)
      )
    this.articleService!.getArticles()
      .subscribe(
        data => {
          if(dbArts)
            dbArts.forEach(e => {
              const art = data.find(value => value.link === e.link);
              // @ts-ignore
              e.date = data[data.indexOf(art)].date;
              // @ts-ignore
              e.media = data[data.indexOf(art)].media;
              // @ts-ignore
              data[data.indexOf(art)] = e;
            })
          this.articles = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  oneDataChange(event: any) {
    this.page = event;
    this.getAll();
  }

}
