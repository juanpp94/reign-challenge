import { Pipe, PipeTransform } from '@angular/core';
import { New } from '../models/news';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(news: New[], page: number = 8): New[] {
    console.log(news);
    return news.splice(page, page + 5);
  }

}
