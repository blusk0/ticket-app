import { TicketsService } from '../core/tickets.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit, OnDestroy {
  private _destroyed$ = new Subject();

  constructor(private _ticketsService: TicketsService) {}

  ngOnInit(): void {
    this._ticketsService
      .getTickets()
      .pipe(takeUntil(this._destroyed$))
      .subscribe((tickets) => console.log(tickets));
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
  }

  addTicket(): void {
    this._ticketsService
      .addTicket({
        priority: 2,
        assignedAt: new Date().toDateString(),
        category: 'Software Issue',
        user: 'Ned Newticket',
      })
      .subscribe((_) =>
        this._ticketsService
          .getTickets()
          .pipe(takeUntil(this._destroyed$))
          .subscribe((tickets) => console.log(tickets))
      );
  }
}
