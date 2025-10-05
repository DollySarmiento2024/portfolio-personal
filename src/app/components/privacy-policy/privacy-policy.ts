import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <div class="container my-5">
      <h1 class="mb-4">Política de Privacidad</h1>
      <p>Fecha de última actualización: 4 de octubre de 2025</p>

      <h2 class="mt-5">1. Introducción</h2>
      <p>Bienvenido a mi portafolio. Como desarrolladora, respeto tu privacidad y me comprometo a proteger tus datos personales. Esta política de privacidad te informará sobre cómo cuido tus datos personales cuando visitas mi sitio web (independientemente de dónde lo visites) y te informará sobre tus derechos de privacidad y cómo la ley te protege.</p>

      <h2 class="mt-5">2. Datos que recopilo sobre ti</h2>
      <p>Datos personales, o información personal, significa cualquier información sobre un individuo a partir de la cual esa persona pueda ser identificada. No incluye datos donde la identidad ha sido eliminada (datos anónimos).</p>
      <p>Puedo recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, los cuales he agrupado de la siguiente manera:</p>
      <ul>
        <li><strong>Datos de identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.</li>
        <li><strong>Datos de contacto:</strong> incluye dirección de correo electrónico y números de teléfono.</li>
        <li><strong>Datos técnicos:</strong> incluye la dirección del protocolo de Internet (IP), tus datos de inicio de sesión, tipo y versión del navegador, configuración y ubicación de la zona horaria, tipos y versiones de los complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que utilizas para acceder a este sitio web.</li>
        <li><strong>Datos de uso:</strong> incluye información sobre cómo utilizas mi sitio web.</li>
      </ul>

      <h2 class="mt-5">3. Cómo se recopilan tus datos personales</h2>
      <p>Utilizo diferentes métodos para recopilar datos de y sobre ti, incluyendo:</p>
      <ul>
        <li><strong>Interacciones directas:</strong> Puedes darme tus datos de identidad y contacto rellenando formularios o contactándome por correo electrónico.</li>
        <li><strong>Tecnologías o interacciones automatizadas:</strong> A medida que interactúas con mi sitio web, puedo recopilar automáticamente datos técnicos sobre tu equipo, acciones de navegación y patrones. Recopilo estos datos personales mediante el uso de cookies y otras tecnologías similares.</li>
      </ul>

      <h2 class="mt-5">4. Cómo utilizo tus datos personales</h2>
      <p>Utilizaré tus datos personales solo cuando la ley me lo permita. Más comúnmente, utilizaré tus datos personales en las siguientes circunstancias:</p>
      <ul>
        <li>Para responder a cualquier consulta que puedas enviarme.</li>
        <li>Donde sea necesario para mis intereses legítimos (o los de un tercero) y tus intereses y derechos fundamentales no prevalezcan sobre esos intereses.</li>
        <li>Donde necesite cumplir con una obligación legal o regulatoria.</li>
      </ul>

      <h2 class="mt-5">5. Tus derechos legales</h2>
      <p>Bajo ciertas circunstancias, tienes derechos bajo las leyes de protección de datos en relación con tus datos personales. Estos incluyen el derecho a:</p>
      <ul>
        <li>Solicitar acceso a tus datos personales.</li>
        <li>Solicitar la corrección de tus datos personales.</li>
        <li>Solicitar la eliminación de tus datos personales.</li>
        <li>Oponerte al procesamiento de tus datos personales.</li>
        <li>Solicitar la restricción del procesamiento de tus datos personales.</li>
        <li>Solicitar la transferencia de tus datos personales.</li>
        <li>Derecho a retirar el consentimiento.</li>
      </ul>

      <h2 class="mt-5">6. Información de contacto</h2>
      <p>Si tienes alguna pregunta sobre esta política de privacidad, por favor contáctame en:</p>
      <p>Dolly Fernanda Sarmiento<br>
      <a href="mailto:your-email@example.com">fernandasar1289@gmail.com</a></p>
    </div>
  `,
  styleUrls: ['./privacy-policy.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyComponent {

}
