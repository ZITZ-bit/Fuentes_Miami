import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout';
import { TopicsService } from '../../services/topics.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './home.html',
  styleUrl: '../../styles/home.style.css',
})
export class HomeView {
  private topicsService = inject(TopicsService);
  protected sidebarTopics = this.topicsService.topics;
}