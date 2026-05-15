import { Injectable, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

const STORAGE_KEY = 'luxe-dental-theme';

export function initTheme(): ThemeMode {
  const stored = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme: ThemeMode = stored === 'light' || stored === 'dark' ? stored : prefersDark ? 'dark' : 'light';
  applyTheme(theme);
  return theme;
}

function applyTheme(theme: ThemeMode): void {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly mode = signal<ThemeMode>(initTheme());

  isDark(): boolean {
    return this.mode() === 'dark';
  }

  toggle(): void {
    this.set(this.isDark() ? 'light' : 'dark');
  }

  set(theme: ThemeMode): void {
    this.mode.set(theme);
    localStorage.setItem(STORAGE_KEY, theme);
    applyTheme(theme);
  }
}
