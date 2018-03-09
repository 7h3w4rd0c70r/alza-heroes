
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';

import { HeroesService } from './heroes.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroEditorComponent,
    HeroListComponent,
    HeroDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
