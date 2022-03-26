import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shalom-button-link',
  templateUrl: './shalom-button-link.component.html',
  styleUrls: ['./shalom-button-link.component.scss']
})
export class ShalomButtonLinkComponent implements OnInit {

  @Input()
  color?: string = 'primary';

  @Input()
  libelle: string;

  constructor() {
    // nothing yet
  }

  ngOnInit(): void {
    // nothing yet
  }

}
