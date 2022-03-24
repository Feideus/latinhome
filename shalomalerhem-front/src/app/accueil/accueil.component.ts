import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpRequest} from "@angular/common/http";

@Component({
  selector: 'shalom-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  title:string = "Hello World";
  _httpError:any;

  constructor(private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.loadTitle();
  }

  loadTitle(){

    this.http.get('/api',{responseType: 'text'})
      .subscribe(res => {
      this.title = res;
    });
  }
}
