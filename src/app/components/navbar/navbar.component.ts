import { Component, input, output, signal } from '@angular/core';
import { LucideMenu, LucideX } from '@lucide/angular';
import type { AppSection } from '../../app';
import { whatsappUrl } from '../../data/contact.data';

@Component({
  selector: 'app-navbar',
  imports: [LucideMenu, LucideX],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  readonly isOpen = signal(false);
  readonly activeSection = input.required<AppSection>();
  readonly sectionSelected = output<AppSection>();
  readonly whatsappUrl = whatsappUrl;

  readonly navItems: { label: string; section: AppSection }[] = [
    { label: 'Home', section: 'home' },
    { label: 'About', section: 'about' },
    { label: 'Services', section: 'services' },
    { label: 'Gallery', section: 'gallery' },
    { label: 'Why Choose Us', section: 'why' },
    { label: 'How It Works', section: 'process' },
    { label: 'Testimonials', section: 'testimonials' },
    { label: 'Contact', section: 'contact' },
  ];

  toggleMenu(): void {
    this.isOpen.update((value) => !value);
  }

  selectSection(section: AppSection): void {
    this.sectionSelected.emit(section);
    this.closeMenu();
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }
}
