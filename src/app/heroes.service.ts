
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import * as _ from 'lodash';

import {
  Hero,
} from '../models';
import { heroes } from './heroes';

@Injectable()
export class HeroesService {

  getHeroes(): Observable<Hero[]> {
    return of(heroes);
  }

  getHero(heroId): Observable<Hero> {
    for (const i in heroes) {
      if (heroes[i].id === heroId) {
        return of(heroes[i]);
      }
    }

    return null;
  }

  getStarredHeroes(): Observable<Hero[]> {
    return of(heroes.filter(hero => hero.hasStar));
  }

  getEmptyHero(): Hero {
    return {
      id: null,
      name: '',
      hasStar: false,
    };
  }

  createHero(hero: Hero): void {
    hero.id = heroes.length + 1;
    heroes.push(hero);
  }

  updateHero(heroId: number, hero: Hero): void {
    for (const i in heroes) {
      if (heroes[i].id === heroId) {
        if (_.has(hero, 'name')) {
          _.set(heroes[i], 'name', hero.name);
        }
        if (_.has(hero, 'hasStar')) {
          _.set(heroes[i], 'hasStar', hero.hasStar);
        }
      }
    }
  }

}
