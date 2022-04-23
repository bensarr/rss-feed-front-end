import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreateArticleComponent} from "./create-article/create-article.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create-article/:id/:link', component: CreateArticleComponent},
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
