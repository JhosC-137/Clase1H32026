import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: '../news.component.html'
})
export class NewsComponent implements OnInit {
  articles: any[] = [];

  constructor(private newsService: NewsService) {}

  async ngOnInit() {
    this.articles = await this.newsService.getNews();
  }
}