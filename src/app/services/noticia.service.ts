import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private http: HttpClient) { }
  getNews(params:any):Observable<any>{
    const URL ="https://newsapi.org/v2/top-headlines?country="+params.country+
      "&category="+params.category+"&apiKey=e4cd355de2964847a261a026e5f9ca1f"
      return this.http.get(URL)
  }


}
