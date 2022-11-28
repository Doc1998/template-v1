import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.less']
})
export class BookingComponent implements OnInit {
  Calendly: any;

  constructor() { }

  ngOnInit(): void {
    this.Calendly.initInlineWidget({
      url: 'https://calendly.com/irelandwebdesigns/15min',
      parentElement: document.getElementById('SAMPLEdivID'),
      prefill: {},
      utm: {}
     });
  }

}
