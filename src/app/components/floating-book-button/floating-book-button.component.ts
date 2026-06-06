import { Component } from '@angular/core';
import { LucideMessageCircle } from '@lucide/angular';
import { whatsappUrl } from '../../data/contact.data';

@Component({
  selector: 'app-floating-book-button',
  imports: [LucideMessageCircle],
  templateUrl: './floating-book-button.component.html',
})
export class FloatingBookButtonComponent {
  readonly whatsappUrl = whatsappUrl;
}
