import { DbService } from './core/db.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TicketsComponent } from './tickets/tickets.component';
import { UsersComponent } from './users/users.component';
import { AssetsComponent } from './assets/assets.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    UsersComponent,
    AssetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DbService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
