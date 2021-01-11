import { Component } from '@angular/core';
import { faBoxes, faHome, faTicketAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

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
