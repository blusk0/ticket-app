import { Ticket } from './../tickets/ticket.model';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({ providedIn: 'root' })
export class DbService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const tickets: Ticket[] = [
      {
        id: 1,
        priority: 2,
        assignedAt: '2020-08-02T12:00:00Z',
        category: 'Software Issue',
        user: 'Tami Ticket',
      },{
        id: 2,
        priority: 1,
        assignedAt: '2020-03-02T12:00:00Z',
        category: 'Networking',
        user: 'Carl Computertroubles',
      },{
        id: 3,
        priority: 1,
        assignedAt: '2020-04-02T12:00:00Z',
        category: 'Hardware Failure',
        user: 'Tommy Ticket',
      },{
        id: 4,
        priority: 4,
        assignedAt: '2020-11-02T12:00:00Z',
        category: 'Software Issue',
        user: 'Test Testerson',
      },
    ];

    const users = [
      {
        id: 1,
        firstName: 'Tommy',
        lastName: 'Ticket',
      },
      {
        id: 2,
        firstName: 'Tami',
        lastName: 'Ticket',
      },
      {
        id: 3,
        firstName: 'Test',
        lastName: 'Testerson',
      },
      {
        id: 4,
        firstName: 'Carl',
        lastName: 'Computertroubles',
      },
    ];

    const assets = [
      {
        id: 1,
        category: 'Software',
        name: "Gary's Custom Program",
      },
      {
        id: 2,
        category: 'Printer',
        name: 'Color Network Printer'
      }
    ]

    return { tickets, users, assets };
  }
}
