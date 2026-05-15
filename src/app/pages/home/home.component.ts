import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, FadeInDirective],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
