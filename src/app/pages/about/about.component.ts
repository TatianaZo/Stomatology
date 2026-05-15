import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, FadeInDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
