import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SiteFooterComponent } from './layout/site-footer.component';
import { SiteHeaderComponent } from './layout/site-header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteHeaderComponent, SiteFooterComponent],
  template: `
    <app-site-header [hero]="hero()" />
    <router-outlet />
    <app-site-footer />
  `,
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);
  readonly hero = signal(false);

  constructor() {
    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.updateFromRoute());

    this.updateFromRoute();
  }

  private updateFromRoute(): void {
    let route = this.router.routerState.root;
    while (route.firstChild) route = route.firstChild;
    const data = route.snapshot.data;
    this.hero.set(!!data['hero']);
    const title = (data['title'] as string) || 'Luxe Dental clinic';
    document.title = title;
  }
}
