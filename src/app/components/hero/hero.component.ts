import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {}
