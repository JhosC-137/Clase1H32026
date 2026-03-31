import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = 'TU_API_KEY_DE_NEWSAPI';
  private baseUrl = 'https://newsapi.org/v2/top-headlines?country=us';

  async getNews() {
    const response = await axios.get(`${this.baseUrl}&apiKey=${this.apiKey}`);
    return response.data.articles;
  }
}