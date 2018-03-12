
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './components/root.component';
import { EditorComponent } from './components/heroes/editor/editor.component';
import { ListComponent } from './components/heroes/list/list.component';
import { DashboardComponent } from './components/heroes/dashboard/dashboard.component';
import { HeroesService } from './services/heroes.service';
import { heroesReducer } from './stores/heroes/heroes.reducer';

@NgModule({
  declarations: [
    RootComponent,
    EditorComponent,
    ListComponent,
    DashboardComponent,
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
