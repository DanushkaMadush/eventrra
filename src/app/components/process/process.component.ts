import { Component } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
})
export class ProcessComponent {
  readonly steps = [
    { title: 'Consult', text: 'Share your event type, date, location, guest count, and preferred style.' },
    { title: 'Concept', text: 'We prepare a styling direction with colors, focal elements, and practical recommendations.' },
    { title: 'Coordinate', text: 'Final details, timing, vendors, and setup needs are organized before event day.' },
    { title: 'Celebrate', text: 'Our team installs, styles, and refines the space so you can enjoy the moment.' },
  ];
}
