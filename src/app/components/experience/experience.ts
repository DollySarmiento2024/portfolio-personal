import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  template: `
    <section id="experience" class="py-5">
      <div class="container">
        <h2 class="display-4 text-center mb-5">Experiencia</h2>
        <div class="row">
          @for (job of experience; track job.title) {
            <div class="col-md-12">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">{{job.title}}</h5>
                  <p class="card-text"><strong>{{job.company}}</strong>, {{job.period}}</p>
                  <ul>
                    @for (responsibility of job.responsibilities; track responsibility) {
                      <li [innerHTML]="responsibility"></li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  experience = [
    {
      title: 'Desarrolladora web',
      company: 'Freelancer',
      period: 'Actualidad',
      responsibilities: [
        'Desarrollo de sitios web personalizados mediante Wordpress, como <a href="https://mariajoseborregoosete.com/" target="_blank">Maria José Borrego Osete</a>',
        'Diseño de sitios responsivos, optimización de contenido y posicionamiento SEO.'
      ]
    },
    {
      title: 'Asistente Administrativa',
      company: 'Caja de Compensación Comfenalco Tolima (Colombia)',
      period: '2014 - 2017',
      responsibilities: [
        'Servicio de atención al cliente, gestión administrativa y e-commerce.',
        'Uso de programas ofimáticos y de gestión de inventarios, producción y logística (SAP).'
      ]
    },
    {
      title: 'Asistente Administrativa',
      company: 'Caprecom EPS (Colombia)',
      period: '2009 - 2009',
      responsibilities: [
        'Ingreso al sistema de actas de liquidación de contratos y recobro de tutelas.'
      ]
    }
  ];
}
