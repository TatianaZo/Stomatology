import { Component, HostListener, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../services/theme.service';

const LOGO_SVG = `<svg class="logo-icon" viewBox="0 0 28 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path d="M14 2C8 2 4 7 4 12c0 4 2 8 4 11 2 3 4 5 6 7 2-2 4-4 6-7 2-3 4-7 4-11 0-5-4-10-10-10z" stroke="#C5A059" stroke-width="1.2" fill="none"/>
  <path d="M14 8v16M10 14h8" stroke="#C5A059" stroke-width="0.8" opacity="0.6"/>
</svg>`;

const ICON_MOON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
  <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5z"/>
</svg>`;

const ICON_SUN = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
  <circle cx="12" cy="12" r="4"/>
  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
</svg>`;

@Component({
  selector: 'app-site-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="site-header" [class.hero-header]="hero()" [class.scrolled]="scrolled || !hero()">
      <div class="container">
        <a routerLink="/" class="logo" aria-label="Luxe Dental — на главную">
          <span [innerHTML]="logoSvg"></span>
          <span class="logo-text">Luxe Dental<span>clinic</span></span>
        </a>
        <nav class="nav" aria-label="Основная навигация">
          @for (link of navLinks; track link.path) {
            <a
              [routerLink]="link.path"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: link.exact }"
              class="nav-link"
              >{{ link.label }}</a
            >
          }
          <div class="nav-actions">
            <button
              type="button"
              class="theme-toggle"
              (click)="theme.toggle()"
              [attr.aria-label]="theme.mode() === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'"
              [attr.title]="theme.mode() === 'dark' ? 'Светлая тема' : 'Тёмная тема'"
            >
              @if (theme.mode() === 'dark') {
                <span [innerHTML]="iconSun"></span>
              } @else {
                <span [innerHTML]="iconMoon"></span>
              }
            </button>
            <a routerLink="/contacts" class="nav-cta">Записаться</a>
          </div>
        </nav>
        <button
          type="button"
          class="burger"
          (click)="openMobile()"
          [attr.aria-expanded]="mobileOpen"
          aria-label="Открыть меню"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
    <nav class="mobile-nav" [class.open]="mobileOpen" aria-label="Мобильное меню">
      <button type="button" class="mobile-close" (click)="closeMobile()" aria-label="Закрыть меню">&times;</button>
      @for (link of navLinks; track link.path) {
        <a [routerLink]="link.path" class="nav-link" (click)="closeMobile()">{{ link.label }}</a>
      }
      <button
        type="button"
        class="theme-toggle"
        (click)="theme.toggle()"
        [attr.aria-label]="theme.mode() === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'"
      >
        @if (theme.mode() === 'dark') {
          <span [innerHTML]="iconSun"></span>
        } @else {
          <span [innerHTML]="iconMoon"></span>
        }
      </button>
      <a routerLink="/contacts" class="nav-cta" (click)="closeMobile()">Записаться</a>
    </nav>
  `,
})
export class SiteHeaderComponent {
  hero = input(false);
  readonly theme = inject(ThemeService);
  logoSvg = LOGO_SVG;
  iconMoon = ICON_MOON;
  iconSun = ICON_SUN;
  scrolled = false;
  mobileOpen = false;

  navLinks = [
    { path: '/', label: 'Главная', exact: true },
    { path: '/about', label: 'О клинике', exact: false },
    { path: '/services', label: 'Услуги', exact: false },
    { path: '/team', label: 'Команда', exact: false },
    { path: '/gallery', label: 'Фото', exact: false },
    { path: '/contacts', label: 'Контакты', exact: false },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 60;
  }

  openMobile(): void {
    this.mobileOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeMobile(): void {
    this.mobileOpen = false;
    document.body.style.overflow = '';
  }
}
