
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';

import {
  Hero,
} from '../../../models';
import { HeroesService } from '../../../services/heroes.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: [
    './editor.component.less',
    '../../../styles/checkbox.less',
  ],
})
export class EditorComponent implements OnInit {
  heroId: number;
  hero: Hero;
  isDraft: boolean;

  constructor(
    private store: Store<any>,
    private heroesService: HeroesService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }

  getHero() {
    const heroId = this.activeRoute.snapshot.paramMap.get('id');

    if (heroId && !isNaN(<any>heroId)) {
      this.heroId = Number(heroId);
      this.isDraft = false;
      this.store.select('heroes').subscribe(state => {
        for (const i in state.heroes) {
          if (state.heroes[i]._id === this.heroId) {
            this.hero = _.cloneDeep(state.heroes[i]);
          }
        }
      });
      return;
    }

    this.heroId = null;
    this.isDraft = true;
    this.hero = _.cloneDeep({
      _id: null,
      name: '',
      hasStar: false,
    });
  }

  async save() {

    if (!_.isString(this.hero.name) || this.hero.name.length < 1) {
      return alert('Hero has to have a name!');
    }

    if (this.isDraft) {
      const newHeroId = await this.heroesService.createHero(this.hero);
      this.router.navigate(['editor', newHeroId]);
      return;
    }

    this.heroesService.updateHero(this.heroId, this.hero);
  }

  goBack() {
    this.location.back();
  }

}
