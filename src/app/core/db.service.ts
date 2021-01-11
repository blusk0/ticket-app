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
        description: 'Program will not open.',
      },
      {
        id: 2,
        priority: 1,
        assignedAt: '2020-03-02T12:00:00Z',
        category: 'Networking',
        user: 'Carl Computertroubles',
        description: 'My internet is not loading websites',
      },
      {
        id: 3,
        priority: 1,
        assignedAt: '2020-04-02T12:00:00Z',
        category: 'Hardware Failure',
        user: 'Tommy Ticket',
        description: 'My screen will not turn on',
      },
      {
        id: 4,
        priority: 4,
        assignedAt: '2020-11-02T12:00:00Z',
        category: 'Software Issue',
        user: 'Test Testerson',
        description: 'Page loads but then does not do what I want.',
      },
      {
        id: 5,
        priority: 1,
        category: 'Hardware Failure',
        description: 'Mouse no longer points or clicks',
        user: 'Charlie Testerfor',
        assignedAt: '2020-11-02T23:23:43Z',
      },
      {
        id: 6,
        priority: 1,
        category: 'Networking',
        description:
          'I do not have the Internet on every other Tuesday between the hours of 3:59 PM and 5:02 PM.',
        user: 'Mike Manybugs',
        assignedAt: '2020-11-03T23:23:43Z',
      },
      {
        id: 7,
        priority: 5,
        category: 'Software Issue',
        description:
          'This software has so many bugs I thought about calling Terminex instead of logging a ticket',
        user: 'Robert Badideas',
        assignedAt: '2020-01-04T23:23:43Z',
      },
      {
        id: 8,
        priority: 4,
        category: 'User Credentials',
        description:
          'My password has expired. This is Greg. Todd let me use his account.',
        user: 'Todd Lunchbox',
        assignedAt: '2020-05-02T23:23:43Z',
      },
      {
        id: 9,
        priority: 2,
        category: 'Hardware Upgrade',
        description:
          "My computer isn't as fast as Tami's and that's why her performance was so much better than mine the last 5 quarters.",
        user: 'Robert Badideas',
        assignedAt: '2020-06-02T23:23:43Z',
      },
      {
        id: 10,
        priority: 1,
        category: 'Hardware Request',
        description:
          'Need a smart board to show off my drawings for my graphic novel.',
        user: 'Test Testerson',
        assignedAt: '2020-11-02T23:23:43Z',
      },
      {
        id: 11,
        priority: 4,
        category: 'Software Request',
        description:
          'I need an Adobe Photoshop license so that I can put Greg in our company photo.',
        user: 'Carl Computertroubles',
        assignedAt: '2020-11-02T23:23:43Z',
      },
      {
        id: 12,
        priority: 4,
        category: 'Software Issue',
        description: 'Software closes when opened but opens when closed.',
        user: 'Greg Gotcha',
        assignedAt: '2020-11-02T23:23:43Z',
      },
      {
        id: 13,
        priority: 2,
        category: 'Networking',
        description: 'I HAVE NO INTERNET I HAD TO MAIL THIS TICKET IN',
        user: 'Tami Ticket',
        assignedAt: '2020-11-02T23:23:43Z',
      },
      {
        id: 14,
        priority: 4,
        category: 'Hardware Request',
        description:
          "I require 17 iPad Pro's so that I can stack them to make one very large tablet.",
        user: 'Robert Badideas',
        assignedAt: '2020-11-02T23:23:43Z',
      },
      {
        id: 15,
        priority: 5,
        category: 'Software Request',
        description: 'One word: Clippy',
        user: 'Tommy Ticket',
        assignedAt: '2020-11-02T23:23:43Z',
      },
    ];

    return { tickets };
  }
}
