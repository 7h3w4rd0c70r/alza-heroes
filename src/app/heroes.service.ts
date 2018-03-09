
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';

import {
  Hero,
} from '../models';

@Injectable()
export class HeroesService {

  heroes: Hero[];

  constructor(private http: HttpClient) {
    this.heroes = [];
  }

  fetchHeroes() {
    return this.http
      .get<Hero[]>('http://localhost:8080/api/v1/heroes')
      .subscribe((heroes: Hero[]) => this.heroes = heroes);
  }

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }

  getHero(heroId): Observable<Hero> {
    for (const i in this.heroes) {
      if (this.heroes[i]._id === heroId) {
        return of(this.heroes[i]);
      }
    }

    return null;
  }

  getStarredHeroes(): Observable<Hero[]> {
    return of(this.heroes.filter(hero => hero.hasStar));
  }

  getEmptyHero(): Hero {
    return {
      _id: null,
      name: '',
      hasStar: false,
    };
  }

  createHero(hero: Hero): Promise<Hero> {
    return new Promise(resolve => {
      this.http
        .post('http://localhost:8080/api/v1/heroes', _.pick(hero, ['name', 'hasStar']))
        .subscribe((_hero: Hero) => {
          this.fetchHeroes();
          resolve(_hero);
        });
    });
  }

  updateHero(heroId: number, hero: Hero): void {
    this.http
      .put(`http://localhost:8080/api/v1/heroes/${heroId}`, _.pick(hero, ['name', 'hasStar']))
      .subscribe((_hero: Hero) => this.fetchHeroes());
  }

}
