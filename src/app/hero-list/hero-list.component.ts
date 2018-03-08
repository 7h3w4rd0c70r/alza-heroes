
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  Hero,
} from '../../models';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private router: Router, private heroesService: HeroesService) { }

  ngOnInit() {
    this.getHeroes();
    this.selectedHero = null;
  }

  getHeroes() {
    this.heroesService
      .getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  selectHero(heroId) {
    if (this.selectedHero && heroId === this.selectedHero.id) {
      this.selectedHero = null;
      return;
    }

    for (const i in this.heroes) {
      if (this.heroes[i].id === heroId) {
        this.selectedHero = this.heroes[i];
      }
    }
  }

  editSelectedHero() {
    this.router.navigate(['editor', this.selectedHero.id]);
  }

}
