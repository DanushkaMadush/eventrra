import { Component } from '@angular/core';
import { LucideCake, LucideCrown, LucideHeart, LucidePalette, LucideSparkles, LucideVenetianMask } from '@lucide/angular';
import { servicesData } from '../../data/services.data';

@Component({
  selector: 'app-services',
  imports: [LucideCake, LucideCrown, LucideHeart, LucidePalette, LucideSparkles, LucideVenetianMask],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  readonly services = servicesData;
}
