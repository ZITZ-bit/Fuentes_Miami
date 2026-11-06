import { Routes } from '@angular/router';

import { Home } from './ui/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  
  { path: '**', redirectTo: '' },
];