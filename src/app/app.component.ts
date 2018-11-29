import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'description',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxieme post',
      content: 'description',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'description',
      loveIts: 2,
      created_at: new Date()
    }
  ];
  constructor() {}
}
