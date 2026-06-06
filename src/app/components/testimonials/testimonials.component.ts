import { Component } from '@angular/core';
import { LucideQuote } from '@lucide/angular';
import { testimonialsData } from '../../data/testimonials.data';

@Component({
  selector: 'app-testimonials',
  imports: [LucideQuote],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {
  readonly testimonials = testimonialsData;
}
