
import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { DashboardComponent } from './components/heroes/dashboard/dashboard.component';
import { ListComponent } from './components/heroes/list/list.component';
import { EditorComponent } from './components/heroes/editor/editor.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full',
}, {
  path: 'dashboard',
  component: DashboardComponent,
  pathMatch: 'full',
}, {
  path: 'list',
  component: ListComponent,
  pathMatch: 'full',
}, {
  path: 'editor',
  component: EditorComponent,
  pathMatch: 'full',
}, {
  path: 'editor/:id',
  component: EditorComponent,
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
