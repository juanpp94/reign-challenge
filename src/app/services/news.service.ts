import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { New } from '../models/news';
import { map } from 'rxjs/operators';

/**Service that interacts with the API of Hacker news and Localstorage */
@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: New[] = [];
  favorite_news: New[] = [];

  constructor(private http: HttpClient) { }
  private readonly URL = environment.api;
  category: String = '';
  
  /**Function that returns an observable with news from hacker news API */
  getNews$():Observable<any> {
    console.log("getting news");
    console.log("la categoria es:",this.category);
    console.log("Esta es la url que se envia:",`${this.URL}/search_by_date?query=${this.category}&page=0`)
    return this.http.get(`${this.URL}/search_by_date?query=${this.category}&page=0`)
    .pipe(map( ({hits,page}:any) => {
      hits.forEach((hit:any) => {
        //Filter the news that have all the fields requested
        if(hit.author !== null && hit.story_title !== null && hit.story_url !== null && hit.created_at !== null) {
          //Obtain the hour in which the new was posted
          let date = new Date(hit.created_at);
          let post_hour = date.getHours();
          let post_minute = date.getMinutes();
          let current_date = new Date();
          let current_hour =  current_date.getHours();
          let current_minute = current_date.getMinutes(); 
          let hour_difference = current_hour - post_hour;
          let minute_difference = current_minute - post_minute;
          //Add the new to the news array
          this.news.push({ 
            author: hit.author,
            story_title: hit.story_title,
            story_url: hit.story_url,
            created_at: `${hour_difference} hours and ${minute_difference} minute ago by author`,
            favorite: false,
        })
        }
       
      })
     
      return this.news;
    }));
  }
/**Function that returns the favorites list from LocalStorage */
  get_favorites_list(): any {
    return JSON.parse(localStorage.getItem('favorites') as string);
  
  }
  /**Method that creates the empty array for favorites list in the LocalStorage */
  create_favorites_list(): void {
    let favorite_news: New[] = JSON.parse(localStorage.getItem('favorites') as string);
    if(!favorite_news) {
      localStorage.setItem('favorites',JSON.stringify(this.favorite_news));
    }
    
  }

  /**Function to add news to the favorite news list */
  add_to_favorites(title: string, author: string): void {
    this.create_favorites_list();
    let favorite_new: New[] = this.news.filter( (local_new: New) => local_new.story_title === title && local_new.author === author);
    favorite_new[0].favorite = true;
    let favorite_news: New[] = this.get_favorites_list();
    favorite_news.push(favorite_new[0]);
    localStorage.setItem('favorites',JSON.stringify(favorite_news));
    

  }
}
