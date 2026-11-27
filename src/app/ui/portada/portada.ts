import { Component } from '@angular/core';

// Componentes

import { Navbar } from '../../components/navbar/navbar';
import { Apariencia } from '../../components/apariencia/apariencia';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.html',
  styleUrl: '../../styles/portada.css',
  standalone: true,
  imports: [Navbar, Apariencia],
})
export class Portada {}
