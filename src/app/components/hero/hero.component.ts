import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="hero">
      <video autoplay muted loop id="myVideo">
        <source src="/assets/video-nebulosa.mp4" type="video/mp4">
      </video>
      <div class="content">
        <h1 class="display-3 fw-bold">Fernanda Sarmiento</h1>
        <p class="lead fs-2">Desarrolladora Web Fullstack</p>
        <a href="#contact" class="btn btn-primary btn-lg mt-4">Contáctame</a>
      </div>
    </section>
  `,
  styleUrls: ['./hero.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {}
