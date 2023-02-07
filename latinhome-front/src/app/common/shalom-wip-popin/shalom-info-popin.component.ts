import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'shalom-shalom-info-popin',
  templateUrl: './shalom-info-popin.component.html',
  styleUrls: ['./shalom-info-popin.component.scss']
})
export class ShalomInfoPopinComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  text: string;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.text = data.text;
    this.title = data.title;
  }

  ngOnInit(): void {
  }

}
