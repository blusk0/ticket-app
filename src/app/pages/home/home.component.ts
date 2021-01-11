import { TicketsService } from '../../core/tickets.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ticket } from '../tickets/ticket.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newTicketForm: FormGroup;

  constructor(
    private _ticketsService: TicketsService,
    formBuilder: FormBuilder
  ) {
    this.newTicketForm = formBuilder.group({
      priority: ['', Validators.required],
      user: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  async formSubmit(): Promise<any> {
    const ticket = <Ticket>{
      assignedAt: new Date().toString(),
      description: this.newTicketForm.get('description')?.value,
      category: this.newTicketForm.get('category')?.value,
      priority: this.newTicketForm.get('priority')?.value,
      user: this.newTicketForm.get('user')?.value,
    };

    try {
      await this._ticketsService.addTicket(ticket).toPromise();
      this.newTicketForm.reset('');
    } catch {}
  }
}
