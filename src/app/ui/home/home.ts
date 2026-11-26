import { Component } from '@angular/core';

// Componentes

import { Navbar } from '../../components/navbar/navbar';
import { Contenido } from '../../components/contenido/contenido';
import { Apariencia } from '../../components/apariencia/apariencia';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: '../../styles/home.css',
  standalone: true,
  imports: [Navbar, Contenido, Apariencia],
})
export class Home {}
