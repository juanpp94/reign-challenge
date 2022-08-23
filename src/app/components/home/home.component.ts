import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { New } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  select_category_form: FormGroup = new FormGroup({});
  news: New[] = [];
  page: number = 1;
  constructor(private _news_service: NewsService) { }

  ngOnInit(): void {
    this.getNews();
    
    //console.log("these are the news",this.news);
  }

  getNews(): New[] {
    //console.log("entre a la funcion");
    this._news_service.getNews$().subscribe((news:New[]) => this.news = news);
    console.log(this.news);
    //setTimeout(() => console.log("espero 3 segundos"),3000);
    return this.news;
  }

  get_category(category: string): void {
    //console.log(category);
    this._news_service.category = category;
    console.log(this._news_service.category);
    //this._news_service.getNews$().subscribe((news:New[]) => this.news = news);
    this.getNews();
  }
}


