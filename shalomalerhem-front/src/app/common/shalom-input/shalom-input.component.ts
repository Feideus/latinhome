import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'shalom-input',
  templateUrl: './shalom-input.component.html',
  styleUrls: ['./shalom-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShalomInputComponent implements OnInit {

  @Input()
  placeholder?:string = "Recherche"

  constructor() {
    // nothing yet
  }

  ngOnInit(): void {
    // nothing yet
  }

}
