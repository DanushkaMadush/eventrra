import { Component } from '@angular/core';
import { contactData } from '../../data/contact.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly contact = contactData;
  readonly year = new Date().getFullYear();
}
