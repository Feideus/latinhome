import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'shalom-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  title: string = "";

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit(): void {
    this.loadTitle();
  }

  loadTitle() {

    this.http.get('/api', {responseType: 'text'})
      .subscribe({
        next: (res) => {
          this.title = res;
      }});
  }

  //res =>
}
