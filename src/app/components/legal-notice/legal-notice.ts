import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  template: `
    <div class="container my-5">
      <h1 class="mb-4">Aviso Legal</h1>
      <p>Fecha de última actualización: 4 de octubre de 2025</p>

      <h2 class="mt-5">1. Información del propietario del sitio web</h2>
      <p>
        <strong>Nombre del propietario:</strong> Dolly Fernanda Sarmiento<br>
        <strong>Contacto:</strong> <a href="mailto:your-email@example.com"> fernandasar1289@gmail.com</a>
      </p>

      <h2 class="mt-5">2. Propósito del sitio web</h2>
      <p>Este sitio web es un portafolio profesional que muestra mis habilidades, proyectos y experiencia como desarrolladora. El propósito es proporcionar información sobre mi trabajo a posibles empleadores y colaboradores.</p>

      <h2 class="mt-5">3. Propiedad intelectual</h2>
      <p>El contenido de este sitio web, incluyendo texto, imágenes, diseño y código, es propiedad intelectual de Dolly Fernanda Sarmiento, a menos que se indique lo contrario. Queda prohibida la reproducción, distribución o modificación de cualquier contenido sin mi permiso explícito.</p>

      <h2 class="mt-5">4. Términos de uso</h2>
      <p>Al acceder y utilizar este sitio web, aceptas los siguientes términos:</p>
      <ul>
        <li>El contenido se proporciona únicamente con fines informativos.</li>
        <li>No garantizo la exactitud o integridad de la información presentada.</li>
        <li>No soy responsable de ningún daño que pueda surgir del uso de este sitio web.</li>
      </ul>

      <h2 class="mt-5">5. Enlaces a terceros</h2>
      <p>Este sitio web puede contener enlaces a sitios web de terceros. No soy responsable del contenido o las prácticas de privacidad de esos sitios. Te recomiendo leer sus políticas de privacidad antes de proporcionar cualquier información personal.</p>

      <h2 class="mt-5">6. Legislación aplicable y jurisdicción</h2>
      <p>Este aviso legal se rige por la legislación de Valencia (España). Cualquier disputa que surja en relación con este sitio web estará sujeta a la jurisdicción exclusiva de los tribunales de Valencia (España).</p>
    </div>
  `,
  styleUrls: ['./legal-notice.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LegalNoticeComponent {

}
