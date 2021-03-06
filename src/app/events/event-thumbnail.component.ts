import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.name}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span>Location: {{event.location.address}}</span>
        <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
      </div>
    </div>
  `
})
export class EventThumbnailComponent {
  @Input() event:any
  @Output() eventClick = new EventEmitter()

  handleClickMe() {
    this.eventClick.emit(this.event.name)
  }

  logFoo() {
    console.log('Foo')
  }

  someProperty:any = "some value"
}
