import { Routes } from '@angular/router';

import { Portada } from './ui/portada/portada';
import { Registro } from './ui/registro/registro';
import { IniciarSesion } from './ui/iniciar-sesion/iniciar-sesion';

export const routes: Routes = [
  { path: '', component: Portada },
  
  { path: 'registro', component: Registro },
  { path: 'iniciar-sesion', component: IniciarSesion },

  { path: '**', redirectTo: '' },
];