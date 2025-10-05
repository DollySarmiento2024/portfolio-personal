import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img [src]="profileImageUrl" class="img-fluid rounded-circle" alt="Fernanda Sarmiento">
          </div>
          <div class="col-lg-6 d-flex flex-column justify-content-center">
            <h2 class="display-4">Sobre Mí</h2>
            <p class="lead">
            ¡Hola! Soy Fernanda Sarmiento, desarrolladora web fullstack con formación en Desarrollo de Aplicaciones Web (DAW) y experiencia en la creación de proyectos que combinan frontend, backend, bases de datos y despliegue en la nube.
            </p>
            <p class="lead">
              Me apasiona transformar ideas en aplicaciones web modernas, funcionales y escalables, siempre priorizando la calidad del código, la usabilidad y un diseño centrado en el usuario.
            </p>
            <p class="lead">
              Además, mi trayectoria académica y profesional en el área de la gestión logística y administrativa me ha aportado una visión global, capacidad de organización y adaptabilidad en entornos dinámicos.
            </p>
            <p class="lead">
              Actualmente desarrollo proyectos con Angular, Symfony, PHP, JavaScript, MySQL y AWS, y busco oportunidades para seguir creciendo, aportar valor y enfrentar nuevos retos en el mundo tecnológico.
            </p>
            <p class="lead">
              Mi objetivo es combinar mi creatividad y habilidades técnicas para construir productos digitales que 
              ofrezcan una experiencia de usuario excepcional.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./about.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  public profileImageUrl = 'assets/profile.png';
}
