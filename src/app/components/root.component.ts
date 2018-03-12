
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { HeroesService } from './../services/heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
})
export class RootComponent implements OnInit {
  isLoading: boolean;
  isSaving: boolean;

  constructor(private store: Store<any>, private heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    this.store.select('heroes').subscribe(state => {
      this.isLoading = state.isLoading;
      this.isSaving = state.isSaving;
    });

    this.heroesService.fetchHeroes();
  }

  navigate(path) {
    this.router.navigate([path]);
  }
}
