
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import {
  Hero,
} from './../models';
import {
  HEROES_SET_HEROES,
  HEROES_ADD,
  HEROES_LOADED,
  HEROES_LOADING,
  HEROES_SAVED,
  HEROES_SAVING,
  HEROES_UPDATE,
} from '../stores/heroes/heroes.actions';

@Injectable()
export class HeroesService {

  constructor(private http: HttpClient, private store: Store<any>) { }

  fetchHeroes(): void {
    this.store.dispatch({ type: HEROES_LOADING });
    this.http
      .get<Hero[]>('http://localhost:8080/api/v1/heroes')
      .subscribe((heroes: Hero[]) => {
        this.store.dispatch({
          type: HEROES_SET_HEROES,
          payload: heroes,
        });
        this.store.dispatch({ type: HEROES_LOADED });
    });
  }

  createHero(hero: Hero): Promise<number> {
    return new Promise(resolve => {
      this.store.dispatch({ type: HEROES_SAVING });
      this.http
        .post('http://localhost:8080/api/v1/heroes', _.pick(hero, ['name', 'hasStar']))
        .subscribe((_hero: Hero) => {
          this.store.dispatch({ type: HEROES_SAVED });
          this.fetchHeroes();
          resolve(_hero._id);
        });
    });
  }

  updateHero(heroId: number, hero: Hero): void {
    this.store.dispatch({ type: HEROES_SAVING });
    this.http
      .put(`http://localhost:8080/api/v1/heroes/${heroId}`, _.pick(hero, ['name', 'hasStar']))
      .subscribe((_hero: Hero) => {
        this.store.dispatch({ type: HEROES_SAVED });
        this.fetchHeroes();
      });
  }

}
