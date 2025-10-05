import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about';
import { SkillsComponent } from '../skills/skills';
import { ProjectsComponent } from '../projects/projects';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent,
  ],
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-projects />
    <app-education />
    <app-experience />
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
