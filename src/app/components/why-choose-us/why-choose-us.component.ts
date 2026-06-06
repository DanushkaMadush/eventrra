import { Component } from '@angular/core';
import { LucideBadgeCheck, LucideClock, LucideFlower2, LucideShieldCheck } from '@lucide/angular';

@Component({
  selector: 'app-why-choose-us',
  imports: [LucideBadgeCheck, LucideClock, LucideFlower2, LucideShieldCheck],
  templateUrl: './why-choose-us.component.html',
})
export class WhyChooseUsComponent {
  readonly reasons = [
    { icon: 'badge', title: 'Premium finish', text: 'Clean compositions, thoughtful palettes, and polished details from every angle.' },
    { icon: 'flower', title: 'Tailored concepts', text: 'Each setup is designed around your event type, space, guest list, and desired mood.' },
    { icon: 'clock', title: 'Reliable execution', text: 'Clear planning, timely setup, and calm coordination when the event day arrives.' },
    { icon: 'shield', title: 'Trusted guidance', text: 'Practical recommendations that balance beauty, comfort, budget, and flow.' },
  ];
}
