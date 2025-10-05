import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Fernanda Sarmiento</a>
        <button class="navbar-toggler" type="button" (click)="toggleMenu()">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" [class.show]="isMenuOpen()">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#about">Sobre Mí</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">Habilidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">Proyectos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#education">Educación</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience">Experiencia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">Contacto</a>
            </li>
            <li class="nav-item">
              <div class="theme-switcher form-check form-switch">
                <input class="form-check-input" type="checkbox" id="themeSwitch" (change)="toggleTheme()">
                <label class="form-check-label" for="themeSwitch">
                  <i class="bi" [class.bi-moon-stars-fill]="!isDarkMode()" [class.bi-sun-fill]="isDarkMode()"></i>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./header.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  isMenuOpen = signal(false);
  isDarkMode = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    document.body.classList.toggle('dark-mode', this.isDarkMode());
  }
}
