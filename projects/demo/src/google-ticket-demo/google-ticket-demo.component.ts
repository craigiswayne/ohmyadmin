import {Component} from '@angular/core';
import {GoogleTicket} from 'component-library';

@Component({
  selector: 'google-ticket-demo',
  imports: [
    GoogleTicket
  ],
  styles: [':host{ margin: 100px 0; display: block;}'],
  templateUrl: 'google-ticket-demo.component.html'
})
export class GoogleTicketDemoComponent {}
