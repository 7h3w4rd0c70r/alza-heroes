
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import {
  Hero,
} from '../../../models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

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
