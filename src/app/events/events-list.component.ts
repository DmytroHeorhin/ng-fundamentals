import { Component } from '@angular/core'

// style can be propagated to children with deep
@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>
        Upcoming Angular Events
      </h1>
      <hr/>
      <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
      <h3>{{thumbnail.someProperty}}</h3>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Foo</button>
    </div>
  `
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: 'assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  handleEventClicked(data: any) {
    console.log('received:', data)
  }
}
