import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News';
  newsArray : any[]=[];
  loading=false;

  constructor(private _noticiaService: NoticiaService){

  }

  findNews(params:any){
    this.loading=true;
    console.log(params); 
    this._noticiaService.getNews(params).subscribe(data=>{
      this.loading=false;
      console.log(data);
      this.newsArray= data.articles;
    },error=>{
      this.loading=false;
      console.log(error);
    })
  }

}
