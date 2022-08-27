import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { New } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

/**Component of the All News View */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  news: New[] = [];
  activePage:number = 0;  
  
 


  constructor(private _news_service: NewsService) { }

  ngOnInit(): void {
    this.getNews();
  }

  
 
/**Function that returns all news */
  getNews(): New[] {
    this._news_service.getNews$().subscribe((news:New[]) => this.news = news);

    return this.news;
  };

/**Function that returns the category that user selected */
  get_category(category: string): void {
    this._news_service.category = category;
    localStorage.setItem("filter",category);
    console.log(this._news_service.category);
    this.getNews();
  }


};

  