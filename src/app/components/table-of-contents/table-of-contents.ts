import { Component, input, output, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorCaretRight, phosphorList } from '@ng-icons/phosphor-icons/regular';
import { Heading } from '../../services/toc.service';

@Component({
  selector: 'app-table-of-contents',
  standalone: true,
  imports: [CommonModule, NgIcon],
  providers: [
    provideIcons({
      phosphorCaretRight,
      phosphorList,
    }),
  ],
  templateUrl: './table-of-contents.html',
  styleUrl: './table-of-contents.css',
})
export class TableOfContentsComponent {
  headings = input<Heading[]>([]);
  activeId = input<string>('');
  navigate = output<string>();

  protected hasHeadings = computed(() => this.headings().length > 0);
  protected isCollapsed = signal(false);

  protected toggleCollapse() {
    this.isCollapsed.update(v => !v);
  }

  protected onHeadingClick(id: string, event: Event) {
    event.preventDefault();
    this.navigate.emit(id);
  }

  protected getIndentClass(level: number): string {
    return `toc-indent-${Math.min(level, 3)}`;
  }
}