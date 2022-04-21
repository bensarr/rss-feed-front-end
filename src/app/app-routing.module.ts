import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListArticlesComponent} from "./list-articles/list-articles.component";

const routes: Routes = [
  {path: 'articles', component: ListArticlesComponent},
  {path: '', redirectTo: 'articles', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
