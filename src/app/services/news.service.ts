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
  news: New[] = [];
  favorite_news: New[] = [];

  constructor(private http: HttpClient) { }
  private readonly URL = environment.api;
  
  getNews$():Observable<any> {
    console.log("getting news");
    return this.http.get(`${this.URL}/search_by_date?query=''&page=0`)
    .pipe(map( ({hits,page}:any) => {
      //console.log('hit en el servicio',hits[0]);
      hits.forEach((hit:any) => {
        if(hit.author !== null && hit.story_title !== null && hit.story_url !== null && hit.created_at !== null) {
          let date = new Date(hit.created_at);
          let post_hour = date.getHours();
          let post_minute = date.getMinutes();
          let current_date = new Date();
          let current_hour =  current_date.getHours();
          let current_minute = current_date.getMinutes(); 
          let hour_difference = current_hour - post_hour;
          let minute_difference = current_minute - post_minute;
          console.log("hit",hit);
          this.news.push({ 
            author: hit.author,
            story_title: hit.story_title,
            story_url: hit.story_url,
            created_at: `${hour_difference} hours and ${minute_difference} minute ago by author`,
            favorite: false,
        })
        }
       
      })
      console.log("noticias en el servicio:", this.news);
      return this.news;
    }));
  }


  create_favorites_list(): void {
    let favorite_news: New[] = JSON.parse(localStorage.getItem('favorites') as string);
    if(!favorite_news) {
      localStorage.setItem('favorites',JSON.stringify(this.favorite_news));
    }
    
  }
  add_to_favorites(title: string, author: string): void {
    let favorite_new: New[] = this.news.filter( (local_new: New) => local_new.story_title === title && local_new.author === author);
    console.log(favorite_new);
    favorite_new[0].favorite = true;
    let favorite_news: New[] = JSON.parse(localStorage.getItem('favorites') as string);
    console.log("favorite news",favorite_news);
    favorite_news.push(favorite_new[0]);
    localStorage.setItem('favorites',JSON.stringify(favorite_news));
    

  }
}
