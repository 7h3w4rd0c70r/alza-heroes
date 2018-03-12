
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root.component';
import { HeroEditorComponent } from './components/hero-editor/hero-editor.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDashboardComponent } from './components/hero-dashboard/hero-dashboard.component';
import { HeroesService } from './services/heroes.service';
import { heroesReducer } from './stores/heroes/heroes.reducer';

@NgModule({
  declarations: [
    RootComponent,
    HeroEditorComponent,
    HeroListComponent,
    HeroDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      heroes: heroesReducer,
    }),
  ],
  providers: [
    HeroesService,
  ],
  bootstrap: [
    RootComponent,
  ],
})
export class AppModule { }
