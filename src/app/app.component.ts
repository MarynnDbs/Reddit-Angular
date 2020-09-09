import { Component } from '@angular/core';
import { Article } from './components/article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles : Article[]
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Ajouter article titre : ${title.value} et le lien : ${link.value}`);
    return false;
  }

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('React', 'http://react.com', 2),
      new Article('Node', 'http://nodejs.org', 4)
    ]
  }
  


}
