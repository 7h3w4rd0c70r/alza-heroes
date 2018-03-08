
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full',
}, {
  path: 'dashboard',
  component: HeroDashboardComponent,
  pathMatch: 'full',
}, {
  path: 'list',
  component: HeroListComponent,
  pathMatch: 'full',
}, {
  path: 'editor',
  component: HeroEditorComponent,
  pathMatch: 'full',
}, {
  path: 'editor/:id',
  component: HeroEditorComponent,
  pathMatch: 'full',
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
