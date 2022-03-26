import { NgModule } from '@angular/core';
import { ShalomInputComponent } from './shalom-input/shalom-input.component';
import { MatInputModule } from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShalomButtonComponent } from './shalom-button/shalom-button.component';
import { ShalomButtonLinkComponent } from './shalom-button-link/shalom-button-link.component';
import {MatButtonModule} from '@angular/material/button';
import {ShalomInfoPopinComponent} from "./shalom-wip-popin/shalom-info-popin.component";
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [
    ShalomInputComponent,
    ShalomButtonComponent,
    ShalomButtonLinkComponent,
    ShalomInfoPopinComponent
  ],
  exports: [
    ShalomInputComponent,
    ShalomButtonLinkComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class CommonModule { }
