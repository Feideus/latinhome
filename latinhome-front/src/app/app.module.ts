import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { RechercheRapideComponent } from './header/recherche-rapide/recherche-rapide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {CommonModule} from "./common/common.module";
import {MatIconModule} from "@angular/material/icon";
import { SubHeaderComponent } from './header/sub-header/sub-header.component';
import { ShalomWipPopinDirective } from './directives/shalom-wip-popin.directive';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    RechercheRapideComponent,
    SubHeaderComponent,
    ShalomWipPopinDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    CommonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
