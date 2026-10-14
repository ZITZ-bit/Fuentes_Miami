import { Component, inject } from '@angular/core';
import { LayoutComponent } from '../../components/layout/layout';
import { TopicsService } from '../../services/topics.service';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  phosphorInfo,
  phosphorLightbulb,
  phosphorFolderOpen,
  phosphorCube,
  phosphorGear,
  phosphorPaintBrush,
  phosphorLayout,
  phosphorStack,
  phosphorAngularLogo,
  phosphorCode,
  phosphorFileCss,
  phosphorInfinity,
  phosphorPackage,
  phosphorTestTube,
  phosphorRocketLaunch,
  phosphorArrowRight,
} from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LayoutComponent, NgIcon],
  providers: [
    provideIcons({
      phosphorInfo,
      phosphorLightbulb,
      phosphorFolderOpen,
      phosphorCube,
      phosphorGear,
      phosphorPaintBrush,
      phosphorLayout,
      phosphorStack,
      phosphorAngularLogo,
      phosphorCode,
      phosphorFileCss,
      phosphorInfinity,
      phosphorPackage,
      phosphorTestTube,
      phosphorRocketLaunch,
      phosphorArrowRight,
    }),
  ],
  templateUrl: './home.html',
  styleUrl: '../../styles/home.style.css',
})
export class HomeView {
  private topicsService = inject(TopicsService);
  protected sidebarTopics = this.topicsService.topics;
}