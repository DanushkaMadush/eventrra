import { Component } from '@angular/core';
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
export class App {}
