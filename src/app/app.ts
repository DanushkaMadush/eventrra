import { Component, signal } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FloatingBookButtonComponent } from './components/floating-book-button/floating-book-button.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { HeroComponent } from './components/hero/hero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProcessComponent } from './components/process/process.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';

export type AppSection =
  | 'home'
  | 'about'
  | 'services'
  | 'gallery'
  | 'why'
  | 'process'
  | 'testimonials'
  | 'contact';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    GalleryComponent,
    WhyChooseUsComponent,
    ProcessComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    FloatingBookButtonComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly selectedSection = signal<AppSection>('home');

  selectSection(section: AppSection): void {
    this.selectedSection.set(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
