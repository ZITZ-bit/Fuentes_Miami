import { Component, input, output, signal, effect, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { NavbarComponent } from '../navbar/navbar';
import { TableOfContentsComponent } from '../table-of-contents/table-of-contents';
import {
  phosphorBookOpen,
  phosphorClock,
  phosphorCube,
  phosphorGear,
  phosphorLightning,
  phosphorListChecks,
  phosphorBook,
  phosphorSidebar,
} from '@ng-icons/phosphor-icons/regular';
import { Topic } from '../../services/topics.service';
import { Heading } from '../../services/toc.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgIcon, NavbarComponent, TableOfContentsComponent],
  providers: [
    provideIcons({
      phosphorBookOpen,
      phosphorClock,
      phosphorCube,
      phosphorGear,
      phosphorLightning,
      phosphorListChecks,
      phosphorBook,
      phosphorSidebar,
    }),
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
  host: {
    '[class.sidebar-open]': 'sidebarOpen()',
  },
})
export class LayoutComponent {
  sidebarTopics = input<Topic[]>([]);
  tocHeadings = input<Heading[]>([]);
  activeTocId = input<string>('');
  tocNavigate = output<string>();

  protected sidebarOpen = signal(false);
  protected isMobile = signal(false);

  constructor() {
    if (typeof window !== 'undefined') {
      this.checkMobile();
      window.addEventListener('resize', () => this.checkMobile());
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape() {
    this.sidebarOpen.set(false);
  }

  protected checkMobile() {
    this.isMobile.set(window.innerWidth <= 1024);
    if (!this.isMobile()) {
      this.sidebarOpen.set(false);
    }
  }

  protected toggleSidebar() {
    this.sidebarOpen.update(v => !v);
  }

  protected closeSidebar() {
    this.sidebarOpen.set(false);
  }

  protected onTocNavigate(id: string) {
    this.tocNavigate.emit(id);
    if (this.isMobile()) {
      this.closeSidebar();
    }
  }
}