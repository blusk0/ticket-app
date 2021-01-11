import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './ticket.model';

@Injectable({ providedIn: 'root' })
export class TicketsService {
  constructor(private _http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this._http.get<Ticket[]>('api/tickets');
  }

  addTicket(ticket: any): Observable<any> {
    return this._http.post('api/tickets', ticket);
  }
}
