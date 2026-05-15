import { Injectable } from '@angular/core';
import { TEAM_LIST, TEAM_MEMBERS, TeamMember } from '../data/team-members';

@Injectable({ providedIn: 'root' })
export class TeamService {
  readonly members = TEAM_LIST;

  getBySlug(slug: string): TeamMember | undefined {
    return TEAM_MEMBERS[slug];
  }
}
