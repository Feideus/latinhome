import {Directive, HostListener} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ShalomInfoPopinComponent} from "../common/shalom-wip-popin/shalom-info-popin.component";

@Directive({
  selector: '[shalomShalomWipPopin]'
})
export class ShalomWipPopinDirective {
  constructor(private dialog: MatDialog) {}

  @HostListener("click", ["$event"])
  onClick() {
    this.dialog.open(ShalomInfoPopinComponent, {
      data: {
        title: "Information",
        text: "La fonctionnalité sera développée ultérieurement"
      },
    });
  }}
