import { Component, inject, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout';
import { TopicsService } from '../../services/topics.service';
import { ContentService, Article } from '../../services/content.service';
import { TocService, Heading } from '../../services/toc.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorClock,
  phosphorArrowLeft,
  phosphorShare,
  phosphorBookmark,
  phosphorPrinter,
} from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, LayoutComponent, NgIcon],
  providers: [
    provideIcons({
      phosphorClock,
      phosphorArrowLeft,
      phosphorShare,
      phosphorBookmark,
      phosphorPrinter,
    }),
  ],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class ArticleComponent {
  private route = inject(ActivatedRoute);
  private topicsService = inject(TopicsService);
  private contentService = inject(ContentService);
  private tocService = inject(TocService);

  protected sidebarTopics = this.topicsService.topics;
  protected article = signal<Article | null>(null);
  protected headings = signal<Heading[]>([]);
  protected activeHeadingId = signal<string>('');

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      const article = this.contentService.getArticle(slug) ?? null;
      this.article.set(article);
      if (article) {
        const result = this.tocService.getHeadingsWithIds(article.content);
        this.headings.set(result.headings);
      }
    }
  }

  protected articleTitle = computed(() => this.article()?.title ?? 'Artículo no encontrado');
  protected articleContent = computed(() => this.article()?.content ?? '');
  protected lastUpdated = computed(() => this.article()?.lastUpdated ?? '');

  protected goBack() {
    window.history.back();
  }

  protected shareArticle() {
    if (navigator.share) {
      navigator.share({
        title: this.articleTitle(),
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }

  protected printArticle() {
    window.print();
  }

  protected onTocNavigate(id: string) {
    this.activeHeadingId.set(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}