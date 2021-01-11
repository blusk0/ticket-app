import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Ticket } from '../pages/tickets/ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  private _tickets$ = new BehaviorSubject<Ticket[]>([]);
  get tickets$(): Observable<Ticket[]> {
    return this._tickets$.asObservable();
  }

  constructor(private _http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this._http
      .get<Ticket[]>('api/tickets')
      .pipe(tap((tickets) => this._tickets$.next(tickets)));
  }

  addTicket(ticket: any): Observable<any> {
    return this._http.post<Ticket>('api/tickets', ticket).pipe(
      tap((newTicket) => {
        this._tickets$.next([...this._tickets$.getValue(), newTicket]);
      })
    );
  }
}
