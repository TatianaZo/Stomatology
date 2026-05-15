import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [RouterLink, FadeInDirective],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  readonly team = inject(TeamService).members;
}
