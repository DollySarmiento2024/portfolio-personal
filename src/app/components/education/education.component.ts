import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-education',
  template: `
    <section id="education" class="py-5 bg-light">
      <div class="container">
        <h2 class="display-4 text-center mb-5">Educación</h2>
        <div class="row">
          @for (edu of education; track edu.degree) {
            <div class="col-md-12">
              <div class="card mb-4">
                <div class="card-body">
                  <h5 class="card-title">{{edu.degree}}</h5>
                  <p class="card-text"><strong>{{edu.institution}}</strong>, {{edu.year}}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./education.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent {
  education = [
    {
      degree: 'Actualidad: Desarrollo de Aplicaciones Web (FP Superior) + Cloud Computing.',
      institution: 'Florida Universitaria (Valencia)',
      year: '2025',
    },
    {
      degree: 'Grado en Administración Logística',
      institution: 'ESLOG (Colombia)',
      year: '2013',
    },
    {
      degree: 'Tecnóloga en Gestión de Canales de Distribución.',
      institution: 'SENA (Colombia)',
      year: '2009',
    },
    {
      degree: 'Bachillerato Técnico Esp. Gestión Empresarial.',
      institution: 'IET Joaquín París (Colombia)',
      year: '2005',    
    }
  ];
}
