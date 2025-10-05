import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
    <footer id="footer" class="py-4 mt-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-start">
            <p class="mb-0">&copy; 2025 Dolly Fernanda Sarmiento. Todos los derechos reservados.</p>
          </div>
          <div class="col-md-3 text-center">
            <a routerLink="/privacy-policy" class="text-white me-3">Política  de privacidad</a>
            <a routerLink="/legal-notice" class="text-white">Aviso legal</a>
          </div>
          <div class="col-md-3 text-center text-md-end">
            <a href="https://www.linkedin.com/in/fernanda-sarmiento-b865b6220/" target="_blank" class="btn btn-outline-light btn-floating m-1">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/DollySarmiento2024" target="_blank" class="btn btn-outline-light btn-floating m-1">
              <i class="fab fa-github"></i>
            </a>
            <a href="mailto:your-email@example.com" class="btn btn-outline-light btn-floating m-1">
              <i class="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

}
