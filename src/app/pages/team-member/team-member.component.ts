import { Component, effect, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';
import { toSignal } from '@angular/core/rxjs-interop';
import { FadeInDirective } from '../../directives/fade-in.directive';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-member',
  standalone: true,
  imports: [RouterLink, FadeInDirective],
  templateUrl: './team-member.component.html',
})
export class TeamMemberComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly teamService = inject(TeamService);

  readonly slug = toSignal(this.route.paramMap.pipe(map((p) => p.get('slug') ?? '')), {
    initialValue: '',
  });

  member() {
    return this.teamService.getBySlug(this.slug());
  }

  constructor() {
    effect(() => {
      const m = this.member();
      if (m) document.title = `${m.name} — Luxe Dental clinic`;
    });
  }
}
