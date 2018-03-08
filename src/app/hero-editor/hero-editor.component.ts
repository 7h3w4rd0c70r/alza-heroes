
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

import {
  Hero,
} from '../../models';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: [
    './hero-editor.component.css',
    '../../assets/styles/checkbox.css',
  ]
})
export class HeroEditorComponent implements OnInit {
  heroId: number;
  hero: Hero;
  isDraft: boolean;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private location: Location, private heroesService: HeroesService) { } // tslint:disable-line:max-line-length

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const heroId = this.activeRoute.snapshot.paramMap.get('id');

    if (heroId && !isNaN(<any>heroId)) {
      this.heroId = Number(heroId);
      this.isDraft = false;
      this.heroesService
        .getHero(this.heroId)
        .subscribe(hero => this.hero = _.cloneDeep(hero));
      return;
    }

    this.heroId = null;
    this.isDraft = true;
    this.hero = _.cloneDeep(this.heroesService.getEmptyHero());
  }

  save() {
    if (this.isDraft) {
      this.heroesService.createHero(this.hero);
      return;
    }

    this.heroesService.updateHero(this.heroId, this.hero);
  }

  goBack() {
    this.location.back();
  }

}
