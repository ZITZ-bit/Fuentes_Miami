import { Component, inject, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorTreePalm,
  phosphorMagnifyingGlass,
  phosphorMoon,
  phosphorSun,
  phosphorList,
} from '@ng-icons/phosphor-icons/regular';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIcon],
  providers: [
    provideIcons({
      phosphorTreePalm,
      phosphorMagnifyingGlass,
      phosphorMoon,
      phosphorSun,
      phosphorList,
    }),
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  private themeService = inject(ThemeService);

  sidebarOpen = input<boolean>(false);
  toggleSidebar = output<void>();

  protected readonly resolvedTheme = this.themeService.resolvedTheme;

  protected toggleTheme() {
    this.themeService.toggleTheme();
  }

  protected getThemeIcon(): string {
    const resolved = this.resolvedTheme();
    return resolved === 'dark' ? 'phosphorMoon' : 'phosphorSun';
  }

  protected getThemeLabel(): string {
    return this.resolvedTheme() === 'dark' ? 'Oscuro' : 'Claro';
  }
}