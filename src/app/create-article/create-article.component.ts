import { Component, OnInit } from '@angular/core';
import {Article} from "../article";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {

  article: Article= new Article();
  articles: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService) { }


  ngOnInit(): void {
    this.article.id = parseInt(this.route.snapshot.params['id']);
    this.article.link = this.route.snapshot.params['link'];
    if(this.article.id === 0)
      this.getArticleRSS();
    else
      this.getARticleDb(this.article.id);
    console.log(this.article);
  }
  onSubmit(){
    this.saveArticle();
  }
  getArticleRSS():void{
    this.articleService!.getArticles()
      .subscribe(
        data => {
          this.articles = data;
          // @ts-ignore
          this.article = data.find(value => value.link === this.article.link);
        },
        error => {
          console.log(error);
        });
  }
  getARticleDb(id:number):void{
    this.articleService!.getArticleById(id)
      .subscribe(
        data => {
          this.article = data;
        },
        error => {
          console.log(error);
        });
  }
  private saveArticle(): void{
    this.articleService.saveDbArticle(this.article).subscribe( data => {
        console.log(data);
        this.goToArticleList();
      },
      error => console.log(error));
  }
  private goToArticleList(): void{
    this.router.navigate(['']);
  }

}
