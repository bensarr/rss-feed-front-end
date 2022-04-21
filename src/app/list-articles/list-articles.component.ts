import {Component, Input, OnInit} from '@angular/core';
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
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.articleService!.getArticles()
      .subscribe(
        data => {
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
