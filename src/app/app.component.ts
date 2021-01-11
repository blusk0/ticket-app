import { Component } from '@angular/core';
import { faHome, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticket-app';
  faHome = faHome;
  faTicketAlt = faTicketAlt;
}
