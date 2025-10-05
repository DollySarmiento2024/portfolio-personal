import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects" class="py-5">
      <div class="container">
        <h2 class="display-4 text-center mb-5">Proyectos</h2>
        <p class="text-center">Me encanta transformar ideas en aplicaciones reales, cuidando cada detalle para ofrecer soluciones únicas y bien estructuradas.</p>
        <div class="row">
          @for (project of projects; track project.name) {
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="card h-100">
                <img [src]="project.image" class="card-img-top" alt="{{project.name}}">
                <div class="card-body">
                  <h4 class="card-title">{{project.name}}</h4>
                  <p class="card-text">{{project.description}}</p>
                </div>
                <div class="card-footer">
                  <a [href]="project.liveUrl" class="btn btn-primary" target="_blank">Ver Proyecto</a>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsComponent {
  projects = [
    {
      name: 'TalentMatch AI App (en desarrollo)',
      description: 'Desarrollo de una aplicación web full stack que conecta empresas con candidatos mediante inteligencia artificial. Implementada con Angular (frontend) y Symfony (backend), la plataforma utiliza la API de Google Gemini para analizar perfiles y encontrar coincidencias precisas entre usuarios y vacantes. Los candidatos pueden descubrir las ofertas que mejor se ajustan a su experiencia y formación, además de optimizar su currículum con ayuda de IA. Las empresas, por su parte, pueden identificar fácilmente a los candidatos más adecuados para cada puesto, agilizando el proceso de selección.',
      image: 'assets/img-talent-match-AI.JPG',
      liveUrl: 'https://github.com/DollySarmiento2024/TalentMatch-AI',
      repoUrl: '#'
    },
    {
      name: 'Sitio web WordPress para psicóloga y escritora (en desarrollo)',
      description: 'Desarrollo de la web oficial de María José Borrego Osete mediante WordPress, combinando su perfil profesional como psicóloga con su labor como escritora. La página incluye secciones sobre su trayectoria, libros, pódcast, proyectos, divulgación, galería y blog, además de un formulario de contacto funcional. Diseñada con WordPress y responsive, permite una gestión sencilla de contenidos y comunicación directa con los usuarios.',
      image: 'assets/img-sitio-web-psicologa.JPG',
      liveUrl: 'https://mariajoseborregoosete.com/',
      repoUrl: '#'
    },
    {
      name: 'ToDo List App',
      description: 'Aplicación web para la gestión completa de tareas, que permite crear, editar, modificar y eliminar entradas. Implementa arquitectura cliente-servidor con Angular en el frontend y Symfony en el backend, comunicándose mediante API REST. Los datos se almacenan en MariaDB.',
      image: 'assets/img-todolist.JPG',
      liveUrl: 'https://github.com/DollySarmiento2024/ToDo_List_App',
      repoUrl: '#'
    },
    {
      name: 'App de Gestión de Reservas de un Restaurante',
      description: 'Aplicación web que permite gestionar reservas de un restaurante, con autenticación de usuarios, roles de acceso diferenciados y gestión de datos mediante MariaDB en Symfony.',
      image: 'assets/img-restaurante.JPG',
      liveUrl: 'https://github.com/DollySarmiento2024/Gestion-de-Reservas-de-un-Restaurante',
      repoUrl: '#'
    },
    {
      name: 'Web estática Inmobiliaria Casablanca',
      description: 'Web estática de la inmobiliaria Agencia Casablanca en Valencia, que presenta la actividad de la empresa, sus propiedades en venta y un canal de contacto para clientes potenciales. Diseñada con HTML5, CSS3, Bootstrap 5 y JavaScript, la página es responsive, bilingüe (español e inglés) y ofrece una navegación clara y visualmente atractiva',
      
      image: 'assets/img-agencia-casablanca.JPG',
      liveUrl: 'https://github.com/DollySarmiento2024/Proyecto_Agencia_Inmobiliaria',
      repoUrl: '#'
    },
    {
      name: 'PokéMorty App',
      description: 'Aplicaciones web en Angular para mostrar datos de los Pokemons de la API pública Poke API y los personajes obtenidos de la API The Rick and Morty API.',
      image: 'assets/img-pokemon.JPG',
      liveUrl: 'https://github.com/DollySarmiento2024/PokeMorty_App',
      repoUrl: '#'
    }
  ];
}
