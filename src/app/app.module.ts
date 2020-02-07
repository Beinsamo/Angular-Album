import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';




import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JanComponent } from './jan/jan.component';
import { PhotodetailComponent } from './photodetail/photodetail.component';
import { FebComponent } from './feb/feb.component';
import { MarComponent } from './mar/mar.component';
import { HomeComponent } from './home/home.component';

import {PhotoService} from "./services/photo.service";
import {HomechangeService} from "./services/homechange.service"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JanComponent,
    PhotodetailComponent,
    FebComponent,
    MarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatDialogModule,
    NgbModule,

  ],
  entryComponents: [
    PhotodetailComponent
  ],
  providers: [
    PhotoService,
    NgbCarouselConfig,
    HomechangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
