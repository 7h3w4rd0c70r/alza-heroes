
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoading: boolean;

  constructor(private router: Router, private heroesService: HeroesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.heroesService
      .fetchHeroes()
      .then(() => this.isLoading = false);
  }

  navigate(path) {
    this.router.navigate([path]);
  }
}
