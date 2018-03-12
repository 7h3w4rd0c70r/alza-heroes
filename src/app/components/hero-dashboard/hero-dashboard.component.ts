
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  Hero,
} from '../../models';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css'],
})
export class HeroDashboardComponent implements OnInit {

  starredHeroes: Hero[];

  constructor(
    private store: Store<any>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.select('heroes').subscribe(state => {
      this.starredHeroes = state.heroes.filter(hero => hero.hasStar);
    });
  }

  editHero(heroId) {
    this.router.navigate(['editor', heroId]);
  }

}
