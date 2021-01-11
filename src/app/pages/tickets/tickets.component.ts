import { TicketsService } from '../../core/tickets.service';
import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {

  constructor(private _ticketsService: TicketsService) {
  }

  ngOnInit(): void {
  }
}
