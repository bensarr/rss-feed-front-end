import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../article.service";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slice: any;
  constructor(
    private articleService: ArticleService) { }

  ngOnInit(): void {
    this.loadSlice()
  }

  loadSlice(){
    this.articleService.getArticles()
      .subscribe(
        data => {
          this.slice = data.slice(0, 3);
          console.log(this.slice)
        },
        error => {
          console.log(error);
        });
  }

}
