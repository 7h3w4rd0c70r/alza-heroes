
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { Store } from '@ngrx/store';

import {
  Hero,
  HeroesState,
} from '../../models';
import {
  HEROES_ADD,
} from '../../stores/heroes/heroes.actions';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.selectedHero = null;
    this.store.select('heroes').subscribe(state => {
      this.heroes = state.heroes;
    });
  }

  selectHero(heroId) {
    if (this.selectedHero && heroId === this.selectedHero._id) {
      this.selectedHero = null;
      return;
    }

    for (const i in this.heroes) {
      if (this.heroes[i]._id === heroId) {
        this.selectedHero = this.heroes[i];
      }
    }
  }

  editSelectedHero() {
    this.router.navigate(['editor', this.selectedHero._id]);
  }

}
