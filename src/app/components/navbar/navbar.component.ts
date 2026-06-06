import { AfterViewInit, Component, HostListener, signal } from '@angular/core';
import { LucideMenu, LucideX } from '@lucide/angular';
import { contactData, whatsappUrl } from '../../data/contact.data';

@Component({
  selector: 'app-navbar',
  imports: [LucideMenu, LucideX],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements AfterViewInit {
  readonly isOpen = signal(false);
  readonly activeSection = signal('home');
  readonly whatsappUrl = whatsappUrl;
  readonly brand = contactData.businessName;

  readonly navItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  ngAfterViewInit(): void {
    this.updateActiveSection();
  }

  @HostListener('window:scroll')
  updateActiveSection(): void {
    const sectionIds = ['home', ...this.navItems.map((item) => item.href.replace('#', ''))];
    const current = sectionIds
      .map((id) => ({ id, top: document.getElementById(id)?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY }))
      .filter((section) => section.top <= 140)
      .at(-1);

    this.activeSection.set(current?.id ?? 'home');
  }

  toggleMenu(): void {
    this.isOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.isOpen.set(false);
  }
}
