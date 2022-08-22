import { Component, Input, OnInit } from '@angular/core';
import { New } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  @Input() new: New = { 
    author: 'author1',
    story_title: 'Realize for React for Visualizing State flow and component hierarchy',
    story_url: 'url1',
    created_at: 'A hour ago by an author',
    favorite: true,
}
  constructor(private _news_service: NewsService) { }

  ngOnInit(): void {
  }

  add_to_favorites(title: string, author: string): void {
    this._news_service.create_favorites_list();
    console.log("title:",title);
    this._news_service.add_to_favorites(title, author);


  }

}
