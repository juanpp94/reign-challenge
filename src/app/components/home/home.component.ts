import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  news: New[] = [];
  constructor(private _news_service: NewsService) { }

  ngOnInit(): void {
    this.getNews();
    
    console.log("these are the news",this.news);
  }

  getNews(): New[] {
    console.log("entre a la funcion");
    this._news_service.getNews$().subscribe((news:New[]) => this.news = news);
    return this.news;

    
    

  }
}


