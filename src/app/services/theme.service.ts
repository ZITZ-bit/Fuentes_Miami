import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark' | 'system';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  readonly theme = signal<Theme>('system');
  readonly resolvedTheme = signal<'light' | 'dark'>('light');

  constructor() {
    if (this.isBrowser) {
      const stored = localStorage.getItem('theme') as Theme | null;
      if (stored) {
        this.theme.set(stored);
      }
      this.applyTheme();
      this.watchSystemTheme();
    }
  }

  private watchSystemTheme() {
    if (!this.isBrowser || typeof window.matchMedia !== 'function') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (this.theme() === 'system') {
        this.applyTheme();
      }
    };
    mediaQuery.addEventListener('change', handler);

    effect(() => {
      this.theme();
      this.applyTheme();
    });
  }

  private applyTheme() {
    if (!this.isBrowser) return;

    const theme = this.theme();
    let resolved: 'light' | 'dark';

    if (theme === 'system') {
      resolved = typeof window.matchMedia === 'function' && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    } else {
      resolved = theme;
    }

    this.resolvedTheme.set(resolved);
    document.documentElement.classList.toggle('dark', resolved === 'dark');
    document.documentElement.setAttribute('data-theme', resolved);
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
    this.applyTheme();
    if (this.isBrowser) {
      localStorage.setItem('theme', theme);
    }
  }

  toggleTheme() {
    const current = this.resolvedTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    this.setTheme(next);
  }
}