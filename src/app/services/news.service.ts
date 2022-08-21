import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { New } from '../models/news';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: New[] = [
    { 
      author: 'author1',
      story_title: 'Realize for React for Visualizing State flow and component hierarchy',
      story_url: 'url1',
      created_at: 'A hour ago by an author',
      favorite: true,
  },
  { 
    author: 'author1',
    story_title: 'Realize for React for Visualizing State flow and component hierarchy',
    story_url: 'url1',
    created_at: 'A hour ago by an author',
    favorite: false,
},
{ 
  author: 'author1',
  story_title: 'Realize for React for Visualizing State flow and component hierarchy',
  story_url: 'url1',
  created_at: 'A hour ago by an author',
  favorite: true
}];

  constructor(private http: HttpClient) { }
  private readonly URL = environment.api;
  
  getNews$():Observable<any> {
    console.log("getting news");
    return this.http.get(`${this.URL}/search_by_date?query=''&page=0`)
    .pipe(map( ({hits,page}:any) => {
      return {hits,page};
    }));
  }
}
