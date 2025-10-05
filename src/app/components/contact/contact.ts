import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, HttpClientModule],
  template: `
    <section id="contact" class="py-5 bg-light">
      <div class="container">
        <h2 class="display-4 text-center mb-5">Contacto</h2>
        <p class="text-center">¡No dudes en contactarme para cualquier pregunta, proyecto u oportunidad!</p>
        <div class="row">
          <div class="col-md-8 mx-auto">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="mb-3">
                <label for="name" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" formControlName="name">
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" formControlName="email">
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">Mensaje</label>
                <textarea class="form-control" id="message" rows="5" formControlName="message"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" [disabled]="!contactForm.valid">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./contact.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  
  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${environment.apiToken}`
      });

      console.log('Sending email with data:', formData);
      console.log('Headers:', headers)

      this.http.post('https://backend-vercel-portfolio.vercel.app/api/send-email', formData, { headers })
        .subscribe({
          next: (response) => {
            console.log('Email sent successfully!', response);
            alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
            this.contactForm.reset();
          },
          error: (error) => {
            console.error('Error sending email:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
          }
        });
    }
  }
}
