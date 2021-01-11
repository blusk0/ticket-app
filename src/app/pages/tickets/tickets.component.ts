import { TicketsService } from '../../core/tickets.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  tickets$: Observable<Ticket[]>;

  constructor(private _ticketsService: TicketsService) {
    this.tickets$ = this._ticketsService.tickets$;
  }

  async ngOnInit(): Promise<any> {
    await this._ticketsService.getTickets().toPromise();
  }
}
