import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

export interface ContactFormPayload {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailjsService {
  sendContactForm(payload: ContactFormPayload): Promise<void> {
    const templateParams = {
      from_name: payload.name,
      from_email: payload.email,
      phone: payload.phone,
      event_type: payload.eventType,
      event_date: payload.eventDate,
      message: payload.message,
    };

    return emailjs
      .send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
        { publicKey: environment.emailjs.publicKey },
      )
      .then(() => undefined);
  }
}
