import { Component, computed, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideMail, LucideMapPin, LucideMessageCircle, LucidePhone, LucideSend } from '@lucide/angular';
import { contactData, whatsappUrl } from '../../data/contact.data';
import { EmailjsService } from '../../services/emailjs.service';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, LucideMail, LucideMapPin, LucideMessageCircle, LucidePhone, LucideSend],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly emailjsService = inject(EmailjsService);

  readonly contact = contactData;
  readonly whatsappUrl = whatsappUrl;
  readonly submitState = signal<SubmitState>('idle');
  readonly isSending = computed(() => this.submitState() === 'sending');

  readonly eventTypes = [
    'Birthday Decorations',
    'Wedding Proposals',
    'Gender Reveals',
    'Brides-to-Be Events',
    'Wedding Decorations',
    'Custom Event Styling',
  ];

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    eventType: ['', Validators.required],
    eventDate: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(12)]],
  });

  fieldInvalid(fieldName: keyof typeof this.form.controls): boolean {
    const field = this.form.controls[fieldName];
    return field.invalid && (field.dirty || field.touched);
  }

  async submit(): Promise<void> {
    this.submitState.set('idle');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitState.set('sending');

    try {
      await this.emailjsService.sendContactForm(this.form.getRawValue());
      this.submitState.set('success');
      this.form.reset();
    } catch {
      this.submitState.set('error');
    }
  }
}
