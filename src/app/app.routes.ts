import { Routes } from '@angular/router';
import { HomeView } from './ui/home/home';

export const routes: Routes = [
  { path: '', component: HomeView },
  {
    path: 'article/:slug',
    loadComponent: () =>
      import('./ui/article/article').then(m => m.ArticleComponent),
  },
  { path: '**', redirectTo: '' },
];