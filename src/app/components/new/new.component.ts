import { Component, Input, OnInit } from '@angular/core';
import { New } from 'src/app/models/news';

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
  constructor() { }

  ngOnInit(): void {
  }

}
