import { NgModule } from '@angular/core';
import { NewsComponent } from './news/news.component';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    {path: 'news', component: NewsComponent, title: 'News-Widgets'},
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule
    ],
    exports: [RouterModule],
    declarations: [
        NewsComponent,
    ],
    providers: [],
})
export class HomeModule { }
