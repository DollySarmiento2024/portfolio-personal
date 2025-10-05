import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="py-5 bg-light">
      <div class="container">
        <h2 class="display-4 text-center mb-5">Habilidades</h2>
        <div class="row">
          @for (skill of skills; track skill.name) {
            <div class="col-md-4">
              <div class="card text-center mb-4">
                <div class="card-body">
                  <img [src]="skill.img" [alt]="skill.name" class="img-fluid" style="height: 70px;">
                  <h5 class="card-title mt-3">{{skill.name}}</h5>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {
  skills = [
    { name: 'php', img: 'assets/PHP-logo.svg.png' },
    { name: 'HTML5', img: 'assets/html-logo.png' },
    { name: 'CSS3', img: 'assets/css-logo.png' },
    { name: 'JavaScript', img: 'assets/js-logo.png' },
    { name: 'Bootstrap', img: 'assets/bootstrap-logo.jpg' },
    { name: 'Angular', img: 'assets/angular-logo.webp' },
    { name: 'Symfony', img: 'assets/symfony-logo.png' },
    { name: 'MySQL', img: 'assets/mysql-logo.png' },
    { name: 'MongoDB', img: 'assets/mongodb.jpg' },    
    { name: 'Docker', img: 'assets/docker-logo.png' },
    { name: 'python', img: 'assets/python-logo.png' },
    { name: 'aws', img: 'assets/aws-logo.png' },
    { name: 'Node.js', img: 'assets/node_js-logo.png' },
    { name: 'ApacheTomcat', img: 'assets/tomcat-logo.png' },
    { name: 'ApiRest', img: 'assets/api-logo.png' },
  ];
}
