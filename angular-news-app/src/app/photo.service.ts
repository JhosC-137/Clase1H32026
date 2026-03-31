import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private baseUrl = 'http://localhost:8000/api/f1photo/';

  constructor(private http: HttpClient) {}

  getRandomPhoto() {
    return this.http.get<any>(this.baseUrl);
  }
}