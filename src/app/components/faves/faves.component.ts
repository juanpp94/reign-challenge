import { Component, OnInit } from '@angular/core';
import { New } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-faves',
  templateUrl: './faves.component.html',
  styleUrls: ['./faves.component.css']
})
export class FavesComponent implements OnInit {

  favorite_news: New[] = [];
  constructor(private _news_service: NewsService) { }

  ngOnInit(): void {
    this.get_favorite_news();
    
    console.log("these are the news",this.favorite_news);
  }

  get_favorite_news(): New[] {
    console.log("entre a la funcion");
    this.favorite_news = this._news_service.get_favorites_list();
    return this.favorite_news;

    
    

  }

}
