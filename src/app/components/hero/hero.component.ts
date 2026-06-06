import { Component, output } from '@angular/core';
import { LucideArrowRight, LucideCalendarCheck, LucideSparkles } from '@lucide/angular';
import type { AppSection } from '../../app';
import { contactData, whatsappUrl } from '../../data/contact.data';

@Component({
  selector: 'app-hero',
  imports: [LucideArrowRight, LucideCalendarCheck, LucideSparkles],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly sectionSelected = output<AppSection>();
  readonly contact = contactData;
  readonly whatsappUrl = whatsappUrl;
}
