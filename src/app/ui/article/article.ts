import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { LayoutComponent } from '../../components/layout/layout';
import { TopicsService } from '../../services/topics.service';
import { ContentService, Article } from '../../services/content.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class ArticleComponent {
  private route = inject(ActivatedRoute);
  private topicsService = inject(TopicsService);
  private contentService = inject(ContentService);

  protected sidebarTopics = this.topicsService.topics;
  protected article = signal<Article | null>(null);

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');
    if (slug) {
      this.article.set(this.contentService.getArticle(slug) ?? null);
    }
  }

  protected articleTitle = computed(() => this.article()?.title ?? 'Artículo no encontrado');
  protected articleContent = computed(() => this.article()?.content ?? '');
  protected lastUpdated = computed(() => this.article()?.lastUpdated ?? '');
}