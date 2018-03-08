
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  Hero,
} from '../../models';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-dashboard',
  templateUrl: './hero-dashboard.component.html',
  styleUrls: ['./hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {

  starredHeroes: Hero[];

  constructor(private router: Router, private heroesService: HeroesService) { }

  ngOnInit() {
    this.getStarredHeroes();
  }

  getStarredHeroes() {
    this.heroesService.getStarredHeroes().subscribe(starredHeroes => this.starredHeroes = starredHeroes);
  }

  editHero(heroId) {
    this.router.navigate(['editor', heroId]);
  }

}
