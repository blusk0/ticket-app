import { AssetsComponent } from './assets/assets.component';
import { UsersComponent } from './users/users.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketsComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'assets',
    component: AssetsComponent,
  },
  {
    path: '',
    redirectTo: 'tickets',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
