import { Component, output } from '@angular/core';
import type { AppSection } from '../../app';
import { contactData } from '../../data/contact.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly sectionSelected = output<AppSection>();
  readonly contact = contactData;
  readonly year = new Date().getFullYear();
}
